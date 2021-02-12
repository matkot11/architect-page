import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../assets/styles/globalStyle';
import theme from '../assets/styles/mainTheme';

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default MainLayout;
