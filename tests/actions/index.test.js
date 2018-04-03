// @flow

import * as actions from '../../actions';
import type { Tweet, User } from '../../types';
import type { ReceiveAction, RequestAction } from '../../actions';

import { tweets } from '../fakes/tweets';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
    it('Search term changed', () => {
        const text = 'Random Search Term';
        const expectedAction = {
            type: actions.SEARCH_TERM_CHANGE,
            searchTerm: text
        };
        expect(actions.searchTermChange(text)).toEqual(expectedAction)
    });

    it('Receive tweets', () => {

        const expectedAction: ReceiveAction = {
            type: actions.RECEIVE_TWEETS,
            tweets: tweets
        };
        expect(actions.receiveTweets(tweets)).toEqual(expectedAction);
    });

    it('Request tweets', () => {
        const expectedAction: RequestAction = {
            type: actions.REQUEST_TWEETS
        };

        expect(actions.requestTweets()).toEqual(expectedAction);
    });

    it('Get tweets', () => {
        const user: User = {
            name: 'joe smith',
            profile_image_url_https: 'some_image.jpg'
        };

        const tweet: Tweet = {
            created_at: 'some date',
            text: 'some tweet',
            user: user
        };

        const mockReceive: ReceiveAction = {
            type: actions.RECEIVE_TWEETS,
            tweets: {
                statuses: [
                    tweet
                ]
            }
        };

        const mockRequest: RequestAction = {
            type: actions.REQUEST_TWEETS
        };

        const expectedActions = [
            mockRequest,
            mockReceive
        ];

        let mockAdapter = new MockAdapter(axios);
        mockAdapter.onGet('http://localhost:3000/api/tweets/random').reply(200, {
            statuses: [
                tweet
            ]
        });

        const store = mockStore({ tweets: [] });

        return store.dispatch(actions.getTweets('random')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
});