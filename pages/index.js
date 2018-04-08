import React from 'react';
import Top from '../components/top';
import SearchBar from '../components/search_bar';
import Results from '../components/results';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import withRoot from './withRoot';
import { withStyles } from 'material-ui/styles';

const styles = {
    root: {
        flexGrow: 1
    }
};

class Index extends React.Component {
    render() {

        const { classes } = this.props;

        return (
            <div id='mainContainer' className={classes.root}>
                <Top/>
                <SearchBar/>
                <Results/>
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(withRedux(initStore)(Index)));