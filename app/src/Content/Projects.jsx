import React from "react"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Carousel from '../Components/Carousel'

const styles = theme => ({
  
});

function Projects(props) {
  const { classes } = props;
  return (
    <Carousel/>
  )
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);