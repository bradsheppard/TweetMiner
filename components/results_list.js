import React from 'react';
import ResultsListItem from './results_list_item';

import type { Tweets } from '../types';

type Props = {
    +tweets: Tweets
}

export default (props: Props) => {
    return (
        <div className='list-group'>
            {
                props.tweets.map((tweet, index) => <ResultsListItem key={index} tweet={tweet} />)
            }
        </div>
    );
}
