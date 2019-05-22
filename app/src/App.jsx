import React from 'react';
import ScrollTest from './Components/ScrollTest'
import BackDrop from './Components/Backdrop'
import AppBar from './Components/SimpleAppBar'
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
//import orange from '@material-ui/core/colors/orange'

import Projects from './Content/Projects'
import Contact from './Content/Contact'
import About from './Content/About'

const myContact = <Contact />
const myProjects = <Projects />
const myAbout = < About />

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
    <div>
      <MuiThemeProvider theme={theme}>
        <AppBar />
        {/* <div style={{backgroundColor: "red", height: 64}}/> */}
        <BackDrop id={"about"} content={myAbout}/>
        <BackDrop id={"projects"} content={myProjects}/>
        <BackDrop id={"contact"} content={myContact}/>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
