import React from 'react';
import ScrollTest from './Components/ScrollTest'
import BackDrop from './Components/Backdrop'
import AppBar from './Components/SimpleAppBar'
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import orange from '@material-ui/core/colors/orange'

import Projects from './Content/Projects'
import Contact from './Content/Contact'

const myContact = <Contact />
const myProjects = <Projects />

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#34515e"
    },
    secondary: orange,
    text: {
      primary: "#fff",
    },
    divider: "#ff9800"
  },
  overrides: {
    MuiButton: {
      containedSecondary: {
        color: "#fff"
      },
    },
    MuiMobileStepper: {
      dot: {
        backgroundColor: "#dcdcdc"
      },
      dotActive: {
        backgroundColor: "#ff9800"
      }
    },
  }
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <AppBar />
        <BackDrop id={"about"} />
        <BackDrop id={"projects"} content={myProjects}/>
        <BackDrop id={"contact"} content={myContact}/>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
