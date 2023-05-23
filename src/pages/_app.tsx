import '../../styles/globals.css'
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

import { UIProvider } from '../../context/ui';
import { EntriesProvider } from '../../context/entries';

import { darkTheme, lightTheme } from '../../themes';




function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SnackbarProvider maxSnack={3}>
            <EntriesProvider>
                <UIProvider>
                    <ThemeProvider theme={lightTheme}>
                        <CssBaseline />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </UIProvider>
            </EntriesProvider>
        </SnackbarProvider>
    )

};

export default MyApp;