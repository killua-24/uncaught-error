import { createMuiTheme } from "@material-ui/core/styles";

const customTheme = (darkMode) =>
  createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#Fb5662" : "#964ec2",
      },
      secondary: {
        main: darkMode ? "#f1f2f8" : "#562873",
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
          padding: "0px",
        },
        outlined: {
          backgroundColor: darkMode ? "#feccd0" : "#964ec215",
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
