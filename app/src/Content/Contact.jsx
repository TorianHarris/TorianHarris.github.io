import React from "react"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Resume from "../Assets/Branding/Torian_Harris_Resume.docx"

const GitHubLink = "https://github.com/torianharris";
const LinkedInLink =  "https://linkedin.com/in/torian-harris-code";

const styles = theme => ({
  root: {
    textAlign: "center",
  },
  text: {
    fontFamily: "Montserrat",
    fontWeight: "lighter",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-around",
  }, 
  icon: {
    color: "white",
    '&:hover' : {
      color: theme.palette.secondary.main
    }
  },
  divider: {
    padding: 0.8,
    marginTop: 0,
    marginBottom: 15,
    marginLeft: -20,
    marginRight: -20
  }
});

function Contact(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.text}>Torian Harris</Typography>

      <Typography variant="h6" className={classes.text}>torianharris917@gmail.com</Typography>
      <Divider className={classes.divider}/>

      <Typography variant="h5" className={classes.text}>Connect with me here</Typography>
      <div className={classes.iconContainer}>
        <IconButton target="_blank" href={GitHubLink} className={classes.icon}>
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </IconButton>
        <IconButton target="_blank" href={LinkedInLink} className={classes.icon}>
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </IconButton>
      </div>

      <Typography variant="h5" className={classes.text}>Download my resume</Typography>
      <div className={classes.iconContainer}>
        <IconButton target="_blank" href={Resume} className={classes.icon}>
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