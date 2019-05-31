import React from 'react'
import { Element } from 'react-scroll'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Mountains from '../Assets/Backgrounds/Mountains.jpg'

import Slider from "./Carousel"

const detectBrowser = () => {
  if(navigator.userAgent.indexOf("Firefox") !== -1)
    return "-moz-available";
  else 
    return "-webkit-fill-available";
}

const styles = {
  container: {
    position: "relative",
    overflow: 'hidden',
  },
  image: {
    height: detectBrowser(),
    minWidth: "100%",
    //height: "calc(100% - 64px)",
    marginBottom: -4,
    position: "relative",
    filter: "contrast(50%) brightness(50%)"
  },
  content: {
    position: "absolute",
    top: "calc(50% - 32px)",
    left: "50%",
    transform: "translate(-50% , -50%)",
    // width: "60%",
    // height: "calc(70% - 64px)",
    //backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
};

function Backdrop(props) {
  const { classes, id, image } = props;
  return (
    <Element name={id} className={classes.container + " getClientRect"}>
      <img src={image} alt="" className={classes.image} />
      <div className={classes.content}>
        {props.content}
      </div>
    </Element>
  )
}

Backdrop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Backdrop);