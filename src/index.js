import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import { StyledEngineProvider } from '@mui/material/styles';

import './index.css';
import App from './App.jsx';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StyledEngineProvider>,
  document.getElementById('root')
);
// una pruebita mas