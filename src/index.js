import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import './index.css';

const myTheme = {
  colors: {
    one: '#F25260',
    two: '#F2CA52',
    three: '#F2B33D',
    four: '#F29422',
    five: ' #A6401B',
    six: '#32de84',
    seven: '#00FF00',
    eight: '#A7F235',
    nine: '#F2B5A7',
    ten: '#F2F2F2',
    eleven: '#252617',
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={myTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
