import React from 'react';
import ScrollTest from './Components/ScrollTest'
import BackDrop from './Components/Backdrop'
import AppBar from './Components/SimpleAppBar'
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
//import orange from '@material-ui/core/colors/orange'

import Projects from './Content/Projects'
import Contact from './Content/Contact'

const myContact = <Contact />
const myProjects = <Projects />

const Color = {
  darkBlue: "#34515e",
  orange: "#ff9800",
  white: "#fff"
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Color.darkBlue
    },
    secondary: {
      main: Color.orange,
    },
    text: {
      primary: Color.white,
    },
    divider: Color.orange
  },
  overrides: {
    MuiButton: {
      containedSecondary: {
        color: Color.white
      },
    },
    MuiMobileStepper: {
      dot: {
        backgroundColor: Color.white,
      },
      dotActive: {
        backgroundColor: Color.orange
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
        <BackDrop id={"projects"} content={myProjects}/>
        <BackDrop id={"contact"} content={myContact}/>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
