import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../assets/styles/globalStyle';
import theme from '../assets/styles/mainTheme';
import Navbar from '../components/navbar/Navbar-component';

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Navbar />
      {children}
    </ThemeProvider>
  </>
);

export default MainLayout;
