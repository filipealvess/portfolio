/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/globalStyle';
import light from '../src/styles/themes/light';
import dark from '../src/styles/themes/dark';

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (!localStorage) return;

    if (window.matchMedia != undefined) {
      const userPreferIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (userPreferIsDark) {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');

        return;
      }
    }

    const localTheme = localStorage.getItem('theme');

    if (localTheme) {
      setTheme(localTheme);
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  return (
    <>
      <Head>
        <title>Filipe Alves - Portfolio</title>
      </Head>

      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <GlobalStyle />
        <Component {...pageProps} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
