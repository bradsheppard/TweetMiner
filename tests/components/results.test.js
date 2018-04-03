// @flow

import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Results from '../../components/results';
import ResultsList from '../../components/results_list';
import configureStore from 'redux-mock-store';

import { tweets } from '../fakes/tweets';
import { Provider } from 'react-redux';

const mockStore = configureStore();

Enzyme.configure({ adapter: new Adapter() });

describe('Results', () => {
    it('It should render', () => {
        const store = mockStore({
            tweets: tweets.statuses
        });
        const enzymeWrapper = mount(<Provider store={store}><Results/></Provider>);

        expect(enzymeWrapper.find(ResultsList)).toHaveLength(1);
    });
});