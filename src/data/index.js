export const theme1 = `{
  "palette": {
    "primary": {
      "main": "#357a38"
    },
    "secondary": {
      "main": "#00a152"
    }
  },
  "components": {
    "MuiButton": {
      "defaultProps": {
        "disableRipple": true,
        "size": "small",
        "sx": {
          "color": "#393e46"
        }
      }
    },
    "MuiPaper": {
      "defaultProps": {
        "elevation": 10
      },
      "styleOverrides": {
        "root": {
          "background": "#222831"
        }
      }
    },
    "MuiTextField": {
      "defaultProps": {
        "variant": "filled"
      },
      "styleOverrides": {
        "root": {
          "borderRadius": "4px",
          "background": "pink"
        }
      }
    }
  },
  "typography": {
    "h4": {
      "fontSize": "3rem"
    }
  }
}`;

export const theme2 = {
  palette: {
    primary: {
      main: "#1769aa"
    },
    secondary: {
      main: "#00b0ff"
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        size: "large",
        sx: {
          borderRadius: "10px"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "gray"
        }
      },
      defaultProps: {
        elevation: 20
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined"
      },
      styleOverrides: {
        root: {
          borderRadius: "10px",
          background: "white"
        }
      }
    }
  },
  typography: {
    h4: {
      fontSize: "4.5rem",
      fontStyle: "italic"
    }
  }
};
