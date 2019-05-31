import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden'
import Portrait from '../Assets/Branding/Portrait.jpg'
import CirclePortrait from '../Assets/Branding/CirclePortrait.png'


const styles = theme => ({
    rootMD: {
        display: "flex",
        justifyContent: "center",
    },
    rootSM: {
        width: "80%"
    },
    textMD: {
        width: 400,
        whiteSpace: "pre-line",
        display: "flex",
        alignItems: "center",
        fontFamily: "Montserrat",
        fontWeight: "lighter",
    },
    textSM: {
        fontFamily: "Montserrat",
        fontWeight: "lighter",
    },
    imageMD: {
        height: 450,
        marginRight: 50
    },
    imageSM: {
        height: 200,
        display: "block",
        marginTop: 30,
        marginBottom: 20,
        marginLeft: "auto",
        marginRight: "auto"
    }
});

const aboutMe =
    `I'm a Front-End developer who loves finding new challenges to solve. \n
I gained an unbreakeable passion for coding when I learned I could combine my creative and logical sides to create applications that could be easily enjoyed by anyone. \n
My main tools are HTML, CSS, JavaScript, and React but I love venturing out and learning other frameworks like Vue and Material-UI.\n
My biggest priority is creating clean, beautiful, and engaging applications while cultivating a fun and encouraging workplace culture.`;

function About(props) {
    const { classes } = props;
    return (
        <>
            {/* smaller sizes */}
            <Hidden mdUp>
                <div className={classes.rootSM}>
                    <img src={CirclePortrait} className={classes.imageSM} />
                        <Typography variant="subtitle1" className={classes.textSM}>
                            {aboutMe}
                        </Typography>
                </div>
            </Hidden>

            {/* bigger sizes */}
            <Hidden smDown>
                <div className={classes.rootMD}>
                    <img src={Portrait} className={classes.imageMD} />
                    <Typography variant="subtitle1" className={classes.textMD}>
                        {aboutMe}
                    </Typography>
                </div>
            </Hidden>
        </>
    )
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};
const WithWidth = withWidth()(About)
export default withStyles(styles)(WithWidth);