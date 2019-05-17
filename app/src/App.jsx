import React from 'react';
import ScrollTest from './components/ScrollTest'
import BackDrop from './components/Backdrop'
import AppBar from './components/SimpleAppBar'
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import orange from '@material-ui/core/colors/orange'

// text: monterrat
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#34515e"
    },
    secondary: orange
  },
  overrides: {
    MuiButton: {
      containedSecondary: {
        color: "white"
      }
    }
  }
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <AppBar />
        <BackDrop id={"about"} />
        <BackDrop id={"projects"} />
        <BackDrop id={"contact"} />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
