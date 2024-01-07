import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import * as ReactDOM from "react-dom";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const queryClient = new QueryClient();

//MUI theming. Works with CssBaseline.
const theme = createTheme({
  palette: {
    mode: "dark",
  },
  // Override or create new styles, colors, palettes...
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </CssBaseline>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root"),
);
