// @flow

import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../components/header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
    it('It should render', () => {
        const enzymeWrapper = mount(<Header />);

        expect(enzymeWrapper.find('nav')).toHaveLength(1);
        expect(enzymeWrapper.find('a')).toHaveLength(1);
    });
});