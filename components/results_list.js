import React from 'react';
import ResultsListItem from './results_list_item';
import List from 'material-ui/List';

import type { Tweets } from '../types';

type Props = {
    +tweets: Tweets
}

export default (props: Props) => {
    return (
        <List>
            {
                props.tweets.map((tweet, index) => <ResultsListItem key={index} tweet={tweet} />)
            }
        </List>
    );
}