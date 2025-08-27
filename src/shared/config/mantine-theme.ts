import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core";
import type { MantineTheme } from "@mantine/core";

// 🎨 твой брендовый цвет (зелёный Rubik-green)
const brandPalette = [
  "#e6f7eb",
  "#ccefd6",
  "#99dfa8",
  "#66cf7a",
  "#33bf4c",
  "#028D00", // основной
  "#027c00",
  "#026b00",
  "#015a00",
  "#004700",
] as const;

const themeOverride = createTheme({
  colors: {
    brand: brandPalette,
    gray: DEFAULT_THEME.colors.gray,
  },

  primaryColor: "brand",
  primaryShade: { light: 5, dark: 5 },

  fontFamily: "Rubik, sans-serif",
  fontFamilyMonospace: "Fira Code, monospace",

  headings: {
    fontFamily: "Poppins, sans-serif", // 👈 здесь Poppins
    fontWeight: "600",
    sizes: {
      h1: { fontSize: "2.5rem", fontWeight: "700", lineHeight: "1.2" },
      h2: { fontSize: "2rem", fontWeight: "600", lineHeight: "1.3" },
      h3: { fontSize: "1.5rem", fontWeight: "600" },
      h4: { fontSize: "1.25rem", fontWeight: "500" },
      h5: { fontSize: "1rem", fontWeight: "500" },
      h6: { fontSize: "0.875rem", fontWeight: "500" },
    },
  },

  radius: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
  },
  defaultRadius: "md",

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
  },

  shadows: {
    xs: "0 1px 3px rgba(0,0,0,0.12)",
    sm: "0 2px 6px rgba(0,0,0,0.12)",
    md: "0 4px 12px rgba(0,0,0,0.15)",
    lg: "0 8px 24px rgba(0,0,0,0.18)",
    xl: "0 12px 32px rgba(0,0,0,0.22)",
  },

  breakpoints: {
    xs: "30em",
    sm: "36em",
    md: "48em",
    lg: "62em",
    xl: "75em",
    "2xl": "90em",
  },

  components: {
    Button: {
      defaultProps: {
        radius: "lg",
        size: "md",
      },
      styles: (theme: MantineTheme) => ({
        root: {
          fontWeight: 400,
          lineHeight: "18px",
          padding: `${theme.spacing.md} ${theme.spacing.xl}`,
          transition: theme.other?.transition ?? "all 0.25s ease-in-out",
          width: "100%",
          height: "max-content",
          fontSize: "14px",
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
        leftIcon: {
          marginRight: theme.spacing.sm,
          width: "15px",
        },
      }),
    },
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
