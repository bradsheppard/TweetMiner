import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import { withStyles } from 'material-ui/styles';

const style = {
    typography: {
        paddingBottom: '1em',
        paddingTop: '1em'
    },
    grid: {
        backgroundColor: '#ffffff'
    }
};

function Top (props) {
    const { classes } = props;

    return(
        <Grid container
              className={classes.grid}
              alignItems='center'
              direction='row'
              justify='center'>
            <Grid xs={4} item>
                <Typography className={classes.typography} variant="display4">
                    Tweet Miner
                </Typography>
            </Grid>
        </Grid>
    );
}

export default withStyles(style)(Top)