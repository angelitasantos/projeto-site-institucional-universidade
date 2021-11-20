import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import theme from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <div className="App">
        Learn React <i class="fas fa-home"></i>
      </div>
    </ThemeProvider>
  );
}

export default App;