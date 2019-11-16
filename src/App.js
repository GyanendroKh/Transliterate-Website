import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { Page } from './page';
import ContextProvider from './context/ContextProvider';
import './App.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: grey[800]
    }
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ContextProvider>
        <CssBaseline />
        <Router>
          <Page />
        </Router>
      </ContextProvider>
    </MuiThemeProvider>
  );
};

export default App;
