// @flow

import React from 'react';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import { withStyles } from 'material-ui/styles';

type Props = {
    +classes: any
}

const style = theme => ({
    typography: {
        paddingBottom: '1em',
        paddingTop: '1em',
        backgroundColor: theme.palette.primary.main
    }
});

function Top (props: Props) {
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