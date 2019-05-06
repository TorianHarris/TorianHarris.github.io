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

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let scrollY = window.pageYOffset;
        let value = 0;
        if (scrollY > 0) {
            value = 0;
        }
        if (scrollY > 636) {
            value = 1;
        }
        if (scrollY > 1372) { 
            value = 2; 
        }
        this.setState({ value: value })
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    scrollToElement = element => {
        scroller.scrollTo(element, { duration: 500, smooth: true, offset: -64 })
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <Tabs value={value} className={classes.flex}>
                    <Tab label="About" onClick={() => this.scrollToElement('about')} />
                    <Tab label="Projects" onClick={() => this.scrollToElement('projects')} />
                    <Tab label="Contact" onClick={() => this.scrollToElement('contact')} />
                </Tabs>
            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);