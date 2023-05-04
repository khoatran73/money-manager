import { createTheme } from '@/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import type { AppProps } from 'next/app';
import Head from 'next/head';

// font
import AuthProvider from '@/context/AuthProvider';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import '@/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'simplebar-react/dist/simplebar.min.css';
import { EmotionCache } from '@emotion/cache';
import { createEmotionCache } from '@/utils/createEmotionCache';
import { CacheProvider } from '@emotion/react';

export interface AppComponentProps extends AppProps {
    emotionCache: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export default function App({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
}: AppComponentProps) {
    const theme = createTheme();

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Money Manager</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <AuthProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <DashboardLayout>
                            <main className="py-4">
                                <Component {...pageProps} />
                            </main>
                        </DashboardLayout>
                    </ThemeProvider>
                </AuthProvider>
            </LocalizationProvider>
        </CacheProvider>
    );
}
