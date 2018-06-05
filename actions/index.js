// @flow

import axios from 'axios';
import type { State } from '../types/index';
import type { Tweet } from '../types';
import getConfig from 'next/config'

export const REQUEST_TWEETS = 'REQUEST_TWEETS';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const SEARCH_TERM_CHANGE = 'SEARCH_TERM_CHANGE';

export const MOCK_URL = 'http://localhost:3000';

export type RequestAction = { type: 'REQUEST_TWEETS' };
export type ReceiveAction = {
    type: 'RECEIVE_TWEETS',
    tweets: {
        statuses: Array<Tweet>
    }
};

export type SearchTermChangeAction = { type: 'SEARCH_TERM_CHANGE', searchTerm: string }

export type Action =
    | SearchTermChangeAction
    | RequestAction
    | ReceiveAction;

let apiUrl;

// Load apiUrl from getConfig if running on next
// If mock, use localhost
if(getConfig()) {
    const { publicRuntimeConfig } = getConfig();
    apiUrl = publicRuntimeConfig.apiUrl;
}
else {
    apiUrl = MOCK_URL;
}

type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<Action>;


export function requestTweets(): RequestAction {
    return {
        type: REQUEST_TWEETS
    }
}

export function receiveTweets(tweets: any): ReceiveAction {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}

export function getTweets(searchTerm: string): ThunkAction {

    return dispatch => {
        dispatch(requestTweets());

        return axios.get(`${apiUrl}/api/tweets/${searchTerm}`)
            .then(response => {
                dispatch(receiveTweets(response.data));
            });
    };
}

export function searchTermChange(searchTerm: string): SearchTermChangeAction {
    return {
        type: SEARCH_TERM_CHANGE,
        searchTerm: searchTerm
    }
}