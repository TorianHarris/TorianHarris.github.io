import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import { animateScroll as scroll, scroller } from 'react-scroll';

const styles = theme => ({
  root: {
    //flexGrow: 1,
  },
  flex: {
    display: "flex",
    justifyContent: "flex-end"
  },
  positionTab: {
    ...theme.typography.button,
  }
});

class SimpleTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }
  offset = 64;

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let scrollY = window.pageYOffset;
    const { topValues } = this.props;

    for (let i = 0; i < topValues.length; i++) {
      if (i !== topValues.length - 1) {
        if (scrollY >= topValues[i] - this.offset && scrollY < topValues[i + 1] - this.offset) {
          this.setState({ value: i })
          break;
        }
      }
      else {
        if (scrollY >= topValues[i] - this.offset) {
          this.setState({ value: i })
          break;
        }
      }
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  scrollToElement = element => {
    scroller.scrollTo(element, { duration: 500, smooth: true, offset: -(this.offset) })
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const position = () => {
      switch (value) {
        case 0:
          return "About"
        case 1:
          return "Projects"
        case 2:
          return "Contact"
        default:
          return ""
      }
    }

    return (
      <div className={classes.root}>
        <Hidden smDown>
          <Tabs value={value} className={classes.flex}>
            <Tab label="About" onClick={() => this.scrollToElement('about')} />
            <Tab label="Projects" onClick={() => this.scrollToElement('projects')} />
            <Tab label="Contact" onClick={() => this.scrollToElement('contact')} />
          </Tabs>
        </Hidden>

        <Hidden mdUp>
          <div className={classes.positionTab}>
            {position()}
          </div>
        </Hidden>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);