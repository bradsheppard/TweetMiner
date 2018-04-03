// @flow

import React from 'react';
import { connect } from 'react-redux';
import ResultsList from './results_list';

import type { Tweets } from '../types';

type ResultsState = {
    +tweets: Tweets
};

class Results extends React.Component<ResultsState> {

    render() {
        return (
            <ResultsList tweets={this.props.tweets} />
        );
    }
}

function mapStateToProps({ tweets }) {
    return {
        tweets
    };
}

export default connect(mapStateToProps)(Results);

