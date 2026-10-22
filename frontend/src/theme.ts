import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A5DFF",
      light: "#5D8DFF",
      dark: "#0E40BC",
    },
    secondary: {
      main: "#0EA5A4",
    },
    background: {
      default: "#F4F7FF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#15213D",
      secondary: "#4B5675",
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: "var(--font-body), sans-serif",
    h1: {
      fontFamily: "var(--font-heading), sans-serif",
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "var(--font-heading), sans-serif",
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: "var(--font-heading), sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          paddingInline: 20,
          minHeight: 44,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid #E4EBFF",
        },
      },
    },
  },
});

export default theme;
