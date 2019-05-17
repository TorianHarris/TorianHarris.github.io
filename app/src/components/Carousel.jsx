import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons'

import BetwixtImg from '../Assets/Screenshots/Betwixt.png'
import KlimaImg from '../Assets/Screenshots/Klima.png'

const tutorialSteps = [
  {
    label: 'Betwixt',
    imgPath: BetwixtImg,
    desc: "First guy hjkjjdkljfjsdfj kladjfjajkfjlkf jsakljjmbnbmbmbkubiub h jhjkhhyjhkh jk",
    sitePath: "",
    githubPath: "",
  },
  {
    label: 'Klima',
    imgPath: KlimaImg,
    desc: "Diffenent guy",
    sitePath: "",
    githubPath: "",
  },
  {
    label: 'Math Bomb',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    desc: "bar dude",
    sitePath: "",
    githubPath: "",
  },
];

const styles = theme => ({
  root: {
    maxWidth: 500,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    //backgroundColor: theme.palette.background.default,
  },
  label: {
    flexGrow: 1,
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "lighter",
    letterSpacing: 1
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 500,
    overflow: 'hidden',
    width: '100%',
  },
  mobileStepper: {
    backgroundColor: "transparent"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    
  },
  icon: {
    paddingLeft: 10
  }
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  maxSteps = tutorialSteps.length;

  handleNext = () => {
    let newStep = this.state.activeStep === this.maxSteps - 1 ? 0 : this.state.activeStep + 1
    this.setState({ activeStep: newStep })
  };

  handleBack = () => {
    let newStep = this.state.activeStep === 0 ? this.maxSteps - 1 : this.state.activeStep - 1
    this.setState({ activeStep: newStep })
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
          <Typography variant="h5" className={classes.label}>{tutorialSteps[activeStep].label}</Typography>
        </div>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
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
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} color="secondary">
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </Button>
          }
        />
        <div style={{marginTop: 10, marginBottom: 30}} className={classes.header}>
          <Typography variant="subtitle1" className={classes.label}>{tutorialSteps[activeStep].desc}</Typography>
        </div>
        <div className={classes.buttonContainer}>
          <Button variant="contained" color="secondary" size="large">
            Site
            <FontAwesomeIcon className={classes.icon} icon={faWindowMaximize} />
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Code
            <FontAwesomeIcon className={classes.icon} icon={faCode} />
          </Button>
        </div>
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);