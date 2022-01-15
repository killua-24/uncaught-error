import { createMuiTheme } from "@material-ui/core/styles";

const customTheme = (darkMode) =>
  createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#8a64dd" : "#7667EB",
      },
      secondary: {
        main: darkMode ? "#f1f2f8" : "#1D1857",
      },
    },
    overrides: {
      MuiMenuItem: {
        root: {
          "&$selected": {
            borderRight: "4px solid #ee685c",
            fontWeight: "700",
          },
        },
      },
      MuiPopover: {
        paper: {
          borderRadius: 2,
        },
      },
      MuiButton: {
        root: {
          borderRadius: 14,
          textTransform: "none",
        },
      },
      MuiChip: {
        root: {
          borderRadius: 3,
          padding: "2px",
        },
        outlined: {
          backgroundColor: darkMode ? "#5c5c7a" : "#964ec215",
        },
      },
      MuiPaper: {
        root: {
          backgroundColor: darkMode ? "#1a1a30" : "#F5F5F5",
        },
      },
    },
    props: {
      MuiButton: {
        disableElevation: true,
      },
    },
  });

export default customTheme;
