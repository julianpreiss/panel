import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/Auth.Context';
import { StyledEngineProvider } from '@mui/material/styles';

import './index.css';
import App from './App.jsx';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StyledEngineProvider>,
  document.getElementById('root')
);
