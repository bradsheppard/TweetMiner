// @flow

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from '../../components/search_bar';
import configureStore from 'redux-mock-store';
import { RECEIVE_TWEETS, REQUEST_TWEETS, SEARCH_TERM_CHANGE } from '../../actions';
import thunk from 'redux-thunk';
import axios from 'axios/index';
import MockAdapter from 'axios-mock-adapter';
import { twitterApiResponse } from '../fakes/tweet_fakes';
import waitForActions from 'redux-mock-store-await-actions';
import { emptyTweetState } from '../fakes/tweet_fakes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

Enzyme.configure({ adapter: new Adapter() });

describe('Search bar', () => {

    it('It should render', () => {
        const store = mockStore({tweets: emptyTweetState});
        const enzymeWrapper = mount(<SearchBar store={store}/>);

        expect(enzymeWrapper.find('#searchForm')).toHaveLength(1);
    });

    it('Search term changed', () => {
        const store = mockStore({tweets: emptyTweetState});
        const enzymeWrapper = mount(<SearchBar store={store}/>);

        const input = enzymeWrapper.find('input');
        input.simulate('change');

        const actions = store.getActions();
        expect(actions).toEqual([
            {
                type: SEARCH_TERM_CHANGE,
                searchTerm: ''
            }
        ]);
    });

    it('Form submit', async () => {
        let mockAdapter = new MockAdapter(axios);
        mockAdapter.onGet('http://localhost:3000/api/tweets/metallica').reply(200, twitterApiResponse);

        const store = mockStore({ tweets: [], searchTerm: 'metallica' });
        const enzymeWrapper = mount(<SearchBar store={store}/>);

        const form = enzymeWrapper.find('form');
        form.simulate('submit');

        await waitForActions(store, [REQUEST_TWEETS, RECEIVE_TWEETS]);

        const actions = store.getActions();
        expect(actions).toEqual([
            {
                type: REQUEST_TWEETS
            },
            {
                type: RECEIVE_TWEETS,
                tweets: twitterApiResponse
            }
        ]);
    });
});