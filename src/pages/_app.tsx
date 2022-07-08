import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '~/styles/themes/light';

import { QueryClientProvider } from 'react-query';
import { queryClient } from '~/services/queryClient';
import createEmotionCache from '~/utils/createEmotionCache';
import { ConsultFipeProvider } from '~/contexts/ConsultFipeContext';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>mobiauto.com.br</title>
      </Head>

      <ConsultFipeProvider>
        <CacheProvider value={emotionCache}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </QueryClientProvider>
        </CacheProvider>
      </ConsultFipeProvider>
    </>
  );
}
