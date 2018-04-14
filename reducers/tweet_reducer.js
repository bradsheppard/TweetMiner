// @flow

import { REQUEST_TWEETS, RECEIVE_TWEETS } from '../actions';

import type { RequestAction, ReceiveAction } from '../actions';
import type { Tweets } from '../types';

const initialState = {
    loading: false,
    tweets: []
};

export type TweetState = {
    tweets: Tweets,
    loading: boolean
}

export default (state: TweetState = initialState, action: RequestAction | ReceiveAction): TweetState => {
    switch(action.type) {
        case REQUEST_TWEETS:
            return {
                tweets: state.tweets,
                loading: true
            };
        case RECEIVE_TWEETS:
            return {
                tweets: action.tweets.statuses,
                loading: false
            };
        default:
            return state;
    }
};