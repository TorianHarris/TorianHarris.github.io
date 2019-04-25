import React, { Component } from 'react';
import AppBar from './components/SimpleAppBar'
//import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import purple from '@material-ui/core/colors/purple'


const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <AppBar />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
