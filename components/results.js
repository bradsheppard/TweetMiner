// @flow

import React from 'react';
import { connect } from 'react-redux';
import ResultsList from './results_list';
import Grid from 'material-ui/Grid';

import type { Tweets } from '../types';

type ResultsState = {
    +tweets: Tweets
};

class Results extends React.Component<ResultsState> {

    render() {
        return (
            <Grid container
                  alignItems='center'
                  direction='row'
                  justify='center'>
                <Grid item xs={12} sm={6}>
                    <ResultsList tweets={this.props.tweets} />
                </Grid>
            </Grid>
        );
    }
}

function mapStateToProps({ tweets }) {
    return {
        tweets
    };
}

export default connect(mapStateToProps)(Results);

