import React from 'react';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import { withStyles } from 'material-ui/styles';

const style = {
    typography: {
        paddingBottom: '1em',
        paddingTop: '1em',
        backgroundColor: '#ffffff'
    }
};

function Top (props) {
    const { classes } = props;

    return(
        <div>
            <Hidden implementation='css' xsDown>
                <Typography className={classes.typography} variant="display4" align='center'>
                    Tweet Miner
                </Typography>
            </Hidden>
            <Hidden implementation='css' smUp>
                <Typography className={classes.typography} variant="display3" align='center'>
                    Tweet Miner
                </Typography>
            </Hidden>
        </div>
    );
}

export default withStyles(style)(Top)