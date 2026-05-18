export const theme = {
  colors: {
    // Semantic roles
    primary: "#111827",
    secondary: "#2F7E8A",
    accent: "#E9A82E",
    background: "#FAF7F0",
    foreground: "#111827",
    muted: "#EFE6D4",

    // Brand-evocative aliases (referenced directly in components and mockup)
    cream: "#FAF7F0",
    sand: "#EFE6D4",
    ink: "#111827",
    teal: "#2F7E8A",
    amber: "#E9A82E",
  },
  fonts: {
    heading: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    body: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  },
  radius: {
    sm: "0.75rem",
    md: "1rem",
    lg: "2rem",
  },
} as const;

export type Theme = typeof theme;
