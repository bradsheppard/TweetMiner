import React from 'react';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
    appBarStyle: {
        position: 'fixed',
        backgroundColor: '#282828'
    }
};

const Header = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBarStyle}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Tweet Miner
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(Header);