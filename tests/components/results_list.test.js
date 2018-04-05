// @flow

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultsList from '../../components/results_list';
import ResultsListItem from '../../components/results_list_item';
import { tweets } from '../fakes/tweets';

Enzyme.configure({ adapter: new Adapter() });

describe('Results list', () => {
    it('It should render', () => {
        const enzymeWrapper = mount(<ResultsList tweets={tweets.statuses}/>);

        expect(enzymeWrapper.find('List')).toHaveLength(1);
        expect(enzymeWrapper.find(ResultsListItem)).toHaveLength(tweets.statuses.length);
    });
});