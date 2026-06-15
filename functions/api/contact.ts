interface Env {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  CONTACT_TO_EMAIL?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const siteEmail = "devon@greatlakessolarpower.com";

const serviceLabels: Record<string, string> = {
  solar: "Solar + battery",
  roofing: "Roofing",
  windows: "Windows",
  doors: "Doors",
  "ev-charger": "EV charger",
  "tree-services": "Tree trimming or removal",
  hvac: "HVAC",
  generators: "Generators",
  insulation: "Foam insulation",
  gutters: "Gutters & downspouts",
  painting: "Interior or exterior painting",
  landscaping: "Landscaping",
  "custom-project": "Custom home project",
  referral: "Refer a friend",
  "not-sure": "Not sure yet — I have questions",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function value(formData: FormData, key: string) {
  const field = formData.get(key);
  return typeof field === "string" ? field.trim() : "";
}

function escapeHtml(input: string) {
  return input.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char] ?? char;
  });
}

function fieldRow(label: string, body: string) {
  return `
    <tr>
      <td style="padding: 10px 0; color: #64748b; font-weight: 700; width: 120px; vertical-align: top;">${escapeHtml(label)}</td>
      <td style="padding: 10px 0; color: #111827; white-space: pre-wrap;">${escapeHtml(body || "Not provided")}</td>
    </tr>
  `;
}

export async function onRequest({ request, env }: PagesContext) {
  if (request.method !== "POST") {
    return json({ ok: false, message: "Method not allowed." }, 405);
  }

  const resendApiKey = env.RESEND_API_KEY;
  const toEmail = env.CONTACT_TO_EMAIL || siteEmail;
  const fromEmail =
    env.RESEND_FROM_EMAIL || "Great Lakes Solar <onboarding@resend.dev>";

  if (!resendApiKey) {
    return json(
      { ok: false, message: "The contact form is not configured yet." },
      500
    );
  }

  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return json({ ok: false, message: "Invalid form submission." }, 400);
  }

  if (value(formData, "website")) {
    return json({ ok: true });
  }

  const name = value(formData, "name");
  const email = value(formData, "email");
  const phone = value(formData, "phone");
  const zip = value(formData, "zip");
  const service = value(formData, "service");
  const message = value(formData, "message");
  const serviceLabel = serviceLabels[service] || service || "Not provided";

  if (!name || !email || !zip || !service || !message) {
    return json(
      { ok: false, message: "Please fill out all required fields." },
      400
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(
      { ok: false, message: "Please enter a valid email address." },
      400
    );
  }

  if (!/^\d{5}(?:-\d{4})?$/.test(zip)) {
    return json({ ok: false, message: "Please enter a valid ZIP code." }, 400);
  }

  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Indiana/Indianapolis",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const ip =
    request.headers.get("CF-Connecting-IP") ||
    request.headers.get("X-Forwarded-For") ||
    "Not available";

  const subject = `New Great Lakes Solar lead: ${serviceLabel}`;
  const text = [
    "New contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `ZIP code: ${zip}`,
    `Interested in: ${serviceLabel}`,
    "",
    "Message:",
    message,
    "",
    `Submitted: ${submittedAt}`,
    `IP: ${ip}`,
  ].join("\n");

  const html = `
    <div style="font-family: Inter, Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #111827;">
      <p style="color: #2F7E8A; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; font-size: 12px;">Great Lakes Solar</p>
      <h1 style="font-size: 28px; line-height: 1.1; margin: 8px 0 20px;">New contact form submission</h1>
      <table style="width: 100%; border-collapse: collapse; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
        ${fieldRow("Name", name)}
        ${fieldRow("Email", email)}
        ${fieldRow("Phone", phone)}
        ${fieldRow("ZIP code", zip)}
        ${fieldRow("Interest", serviceLabel)}
        ${fieldRow("Message", message)}
        ${fieldRow("Submitted", submittedAt)}
        ${fieldRow("IP", ip)}
      </table>
    </div>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  if (!resendResponse.ok) {
    const details = await resendResponse.text();
    console.error("Resend contact email failed", details);

    return json(
      {
        ok: false,
        message:
          "We could not send your message right now. Please call or email us directly.",
      },
      502
    );
  }

  return json({ ok: true });
}
