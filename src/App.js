import {
  Button,
  Paper,
  Typography,
  Box,
  ThemeProvider,
  createTheme,
  TextField
} from "@mui/material";
import { useState } from "react";
import { theme1, theme2 } from "./data";
import baseTheme from "./styles/styles";
import { deepmerge } from "@mui/utils";

import "./styles.css";

export default function App() {
  const [theme, setTheme] = useState(baseTheme);

  const handleSwitch = (whichTheme) => {
    const newTheme = deepmerge(theme, whichTheme);
    setTheme(createTheme(newTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ height: "600px" }} className="App">
        <Typography color="primary" variant="h4">
          Material UI - Dynamic Theme
        </Typography>
        <Button
          onClick={() => setTheme(baseTheme)}
          variant="contained"
          color="primary"
        >
          Reset
        </Button>
        <Button
          onClick={() => handleSwitch(JSON.parse(theme1))}
          variant="contained"
          color="secondary"
        >
          Theme 1
        </Button>
        <Button onClick={() => handleSwitch(theme2)} variant="contained">
          Theme 2
        </Button>
        <TextField label="I am a text field" />
      </Paper>
    </ThemeProvider>
  );
}
