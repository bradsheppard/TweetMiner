import React from 'react';
import Header from '../components/header';
import Top from '../components/top';
import SearchBar from '../components/search_bar';
import Results from '../components/results';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import withRoot from './withRoot';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    searchArea: {
        backgroundColor: theme.palette.secondary.main,
        paddingBottom: '8em',
        paddingTop: '8em'
    },
    root: {
        flexGrow: 1
    }
});

class Index extends React.Component {
    render() {

        const { classes } = this.props;

        return (
            <div id='mainContainer' className={classes.root}>
                {/*<Header/>*/}
                <Top/>
                <div className={classes.searchArea}>
                    <Grid container
                          alignItems='center'
                          direction='row'
                          justify='center'>
                        <Grid item xs={12} sm={6}>
                            <SearchBar/>
                        </Grid>
                    </Grid>
                </div>
                <Results/>

            </div>
        );
    }
}

export default withRoot(withStyles(styles)(withRedux(initStore)(Index)));