import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';


const styles = theme => ({
    red: {
        color: "red"
    },
    blue: {
        color: "blue"
    }
});

const truthy = false;
function About(props) {
    const { classes } = props;
    return (
        <>
        <Hidden smUp>
            small and up hidden
        </Hidden>

        <Hidden xsDown>
            xtra small and down hidden
        </Hidden>
        </>
    )
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);