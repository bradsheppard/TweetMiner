// @flow

import React from 'react';
import { connect } from 'react-redux';
import ResultsList from './results_list';
import Grid from 'material-ui/Grid';
import Fade from 'material-ui/transitions/Fade';

import type { TweetState } from '../reducers/tweet_reducer';

type ResultsState = {
    +tweets: TweetState
};

class Results extends React.Component<ResultsState> {

    render() {
        return (
            <Fade in={!this.props.tweets.loading} timeout={750}>
                <Grid container
                      alignItems='center'
                      direction='row'
                      justify='center'>
                    <Grid item xs={12} sm={6}>
                        <ResultsList tweets={this.props.tweets.tweets} />
                    </Grid>
                </Grid>
            </Fade>
        );
    }
}

function mapStateToProps({ tweets }) {
    return {
        tweets
    };
}

export default connect(mapStateToProps)(Results);

