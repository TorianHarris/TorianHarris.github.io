import React from "react"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  text: {
    textAlign: "center",
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "bolder",
    fontSize: 30
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-around",
  }, 
  iconHover: {
    '&:hover' : {
      color: theme.palette.secondary.main
    }
  }
});

function Contact(props) {
  const { classes } = props;
  return (
    <div className={classes.text}>
      <p >Connect with me here:</p>
      <div className={classes.iconContainer}>
        <IconButton className={classes.iconHover} color="inherit">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </IconButton>
        <IconButton className={classes.iconHover} color="inherit">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </IconButton>
      </div>
      <p >Download my resume:</p>
      <div className={classes.iconContainer}>
        <IconButton className={classes.iconHover} color="inherit">
          <FontAwesomeIcon icon={faFileDownload} size="3x" />
        </IconButton>
      </div>
    </div>
  )
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);