import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { SnackbarProvider } from 'notistack';
import {
  createStyles,
  createTheme,
  jssPreset,
  makeStyles,
  StylesProvider,
  ThemeProvider,

} from '@material-ui/core';
import Routes from 'src/Routes';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './assets/css/App.css';

const history = createBrowserHistory();
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%'
    },
    body: {
      height: '100%',
      width: '100%'
    },
    '#root': {
      height: '100%',
      width: '100%'
    }
  }
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B6777',
      dark: '#52AB98'
    },
    secondary: {
      light: '#FFFFFF',
      main: '#C8D8E4',
      dark: '#F2F2F2'
    },
    warning: {
      main: '#0D0D0D'
    }
  }
});

function App() {
  useStyles();

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <SnackbarProvider maxSnack={1}>
          <Router history={history}>
            <Routes />
          </Router>
        </SnackbarProvider>
      </StylesProvider>
    </ThemeProvider>    
  );
}

export default App;
