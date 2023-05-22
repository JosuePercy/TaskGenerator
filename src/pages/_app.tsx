import '../../styles/globals.css'
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import { UIProvider } from '../../context/ui';
import { EntriesProvider } from '../../context/entries';

import { darkTheme, lightTheme } from '../../themes';




function MyApp({ Component, pageProps }: AppProps) {
    return (
        <EntriesProvider>
            <UIProvider>
                <ThemeProvider theme={lightTheme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </UIProvider>
        </EntriesProvider>
    )

};

export default MyApp;