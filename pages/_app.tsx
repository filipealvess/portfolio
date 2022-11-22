/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyle';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Filipe Alves - Portfolio</title>
      </Head>

      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
}

export default App;
