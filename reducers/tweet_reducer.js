// @flow

import { REQUEST_TWEETS, RECEIVE_TWEETS } from '../actions';

import type { RequestAction, ReceiveAction } from '../actions';
import type { Tweets } from '../types';

const initialState = [];

export default (state: Tweets = initialState, action: RequestAction | ReceiveAction): Tweets => {
    switch(action.type) {
        case REQUEST_TWEETS:
            return initialState;
        case RECEIVE_TWEETS:
            return action.tweets.statuses;
        default:
            return state;
    }
};