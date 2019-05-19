import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

import BetwixtImg from "../Assets/Screenshots/Betwixt.png";
import KlimaImg from "../Assets/Screenshots/Klima.png";

const projects = [
  {
    label: "Betwixt",
    imgPath: BetwixtImg,
    desc: "Finds the midpoint between two locations and renders places of interest around the midpoint onto a Google Map.",
    tech: "Team Project. Used React, Material UI, Google Maps API.",
    sitePath: "https://betwixt-gt.herokuapp.com",
    githubPath: "https://github.com/ukgt/betwixt"
  },
  {
    label: "Klima",
    imgPath: KlimaImg,
    desc: "Uses the National Climatic Data Center API find the impacts of severe weather and climate changes for any given area.",
    tech: "Team Project. Used Vue.js, HTML, CSS, Javascript.",
    sitePath: "https://project-klima.herokuapp.com",
    githubPath: "https://github.com/TorianHarris/Klima"
  },
  // {
  //   label: "Math Bomb",
  //   imgPath:
  //     "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  //   desc: "ffakajkf jajfkjflkjak fjkjklfjajl",
  //   sitePath: "",
  //   githubPath: "https://github.com/TorianHarris/MathBomb"
  // }
];

const styles = theme => ({
  root: {
    maxWidth: 600,
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 75
    //backgroundColor: theme.palette.background.default,
  },
  text: {
    flexGrow: 1,
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "lighter",
    letterSpacing: 1
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 600,
    overflow: "hidden",
    width: "100%"
  },
  mobileStepper: {
    backgroundColor: "transparent"
  },
  icon: {
    paddingLeft: 10
  },
  buttonContainer: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-around"
  }
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0
  };

  maxSteps = projects.length;

  handleNext = () => {
    let newStep =
      this.state.activeStep === this.maxSteps - 1
        ? 0
        : this.state.activeStep + 1;
    this.setState({ activeStep: newStep });
  };

  handleBack = () => {
    let newStep =
      this.state.activeStep === 0
        ? this.maxSteps - 1
        : this.state.activeStep - 1;
    this.setState({ activeStep: newStep });
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    return (
      //  <div>Slider</div>
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography variant="h5" className={classes.text}>
            {projects[activeStep].label}
          </Typography>
        </div>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {projects.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={this.maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} color="secondary">
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} color="secondary">
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />

        <div style={{paddingTop: 15, paddingBottom: 20}}>
          <Typography variant="subtitle1" gutterBottom className={classes.text}>
            {projects[activeStep].desc}
          </Typography>
          <Typography variant="subtitle1" className={classes.text} style={{fontStyle: "italic"}}>
            {projects[activeStep].tech}
          </Typography>
        </div>

        <div className={classes.buttonContainer}>
          <Button variant="contained" color="secondary" size="large" target="_blank" href={projects[activeStep].sitePath}>
            Site
            <FontAwesomeIcon icon={faWindowMaximize} className={classes.icon} />
          </Button>
          <Button variant="contained" color="secondary" size="large" target="_blank" href={projects[activeStep].githubPath}>
            Code
            <FontAwesomeIcon icon={faCode} className={classes.icon} />
          </Button>
        </div>
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  SwipeableTextMobileStepper
);
