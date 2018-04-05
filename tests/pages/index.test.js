// @flow

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Index from '../../pages/index';

Enzyme.configure({ adapter: new Adapter() });

describe('Index page', () => {
    it('It should render', () => {
        const enzymeWrapper = mount(<Index/>);

        expect(enzymeWrapper.find('#mainContainer')).toHaveLength(1);
    });
});