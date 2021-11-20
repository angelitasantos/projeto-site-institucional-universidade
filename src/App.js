import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        Learn React <i class="fas fa-home"></i>
      </div>
    </ThemeProvider>
  );
}

export default App;