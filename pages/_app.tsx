import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/themes/GlobalStyle';
import { theme } from '../src/themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}