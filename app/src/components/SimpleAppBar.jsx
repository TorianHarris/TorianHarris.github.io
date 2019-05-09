import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import NavTabs from './NavTabs'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1
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
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Torian Harris
          </Typography>
            <NavTabs topValues={this.state.topValues}/>
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