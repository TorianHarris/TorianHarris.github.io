import React from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Mountains from '../Assets/Mountains.jpg'


const styles = {
    container: {
        position: "relative"
    },
    image: {
        width: "100%",
        //height: "calc(100% - 64px)",
        marginBottom: -4,
        position: "relative",
        filter: "contrast(50%) brightness(50%)"
    },
    content: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50% , -50%)",
    },
};

function Backdrop(props) {
    const { classes, id } = props;
    return (
        <Element name={id} className={classes.container}>
            <img src={Mountains} alt="" className={classes.image} />
            <div className={classes.content}>
                <Button variant="contained" color="secondary">hello World</Button>
            </div>
        </Element>


    )
}

Backdrop.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Backdrop);