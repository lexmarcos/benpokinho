import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
