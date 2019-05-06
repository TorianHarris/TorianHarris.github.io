import React from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Mountains from '../Assets/Mountains.jpg'


const styles = {
    image: {
        width: "100%",
        //height: "calc(100% - 64px)",
        marginBottom: -4,
        position: "relative",
    }
};

function Backdrop(props) {
    const { classes, id } = props;
    return (
        <Element name={id}>
            <img src={Mountains} alt="" className={classes.image} />
        </Element>


    )
}

Backdrop.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Backdrop);

//"calc(100% - 64px)"