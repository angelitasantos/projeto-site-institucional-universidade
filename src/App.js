import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import theme from './theme';
import './App.css';
import Routes from './components/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Routes />
    </ThemeProvider>
  );
}

export default App;