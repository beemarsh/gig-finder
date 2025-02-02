import React from "react";
import "../styles/index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import theme from "../config/theme";

function GigFinderApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SnackbarProvider autoHideDuration={4000}>
          <Component {...pageProps} />
        </SnackbarProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default GigFinderApp;
