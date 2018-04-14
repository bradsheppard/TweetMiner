// @flow

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultsListItem from '../../components/results_list_item';

import { tweet } from '../fakes/tweet_fakes';

Enzyme.configure({ adapter: new Adapter() });

describe('Results list item', () => {
    it('It should render', () => {
        const enzymeWrapper = mount(<ResultsListItem tweet={tweet}/>);

        expect(enzymeWrapper.find('ListItem')).toHaveLength(1);
    });
});