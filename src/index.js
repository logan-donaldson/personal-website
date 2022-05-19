import ReactDOM from "react-dom";

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const theme = createTheme();

ReactDOM.render(
  <Router>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
