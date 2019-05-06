import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
      display: "flex",
      justifyContent: "flex-end"
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  scrollToElement = element => {
    scroller.scrollTo(element, {duration: 500, smooth: true, offset: -64})
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
          <Tabs value={value} onChange={this.handleChange} className={classes.flex}>
            <Tab label="Item One" onClick={() => this.scrollToElement('dog')}/>
            <Tab label="Item Two" onClick={() => this.scrollToElement('cat')}/>
            <Tab label="Item Three" />
          </Tabs>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);