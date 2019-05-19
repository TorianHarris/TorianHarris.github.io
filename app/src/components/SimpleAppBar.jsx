import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavTabs from './NavTabs'
import Logo from '../Assets/Branding/logo-light-no-title.png'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center"
  },
  logo: {
    maxHeight: 40,
    paddingRight: 10
  },
  title: {
    opacity: 0.8,
    fontFamily: "Montserrat",
    fontWeight: "lighter",
    letterSpacing: 3
  }
};

class SimpleAppBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topValues: []
    }
  }

  componentDidMount() {
    this.getClientRects();
  }

  getClientRects = () => {
    let rects = document.getElementsByClassName("getClientRect");
    const newArr = [];
    for (let i = 0; i < rects.length; i++) {
      newArr.push(rects[i].offsetTop);
    }
    this.setState({ topValues: newArr });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root + " navBar"}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <div className={classes.grow}>
              <img src={Logo} className={classes.logo}></img>
              <Typography variant="h5" className={classes.title}>
                TORIAN HARRIS
              </Typography>
            </div>
            <NavTabs topValues={this.state.topValues} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);