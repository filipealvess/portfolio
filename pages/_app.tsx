/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../src/styles/globalStyle';
import Head from 'next/head';
import light from '../src/styles/themes/light';
import { ThemeProvider } from 'styled-components';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Filipe Alves - Portfolio</title>
      </Head>

      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
