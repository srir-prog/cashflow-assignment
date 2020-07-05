import React from 'react';
import { shallow } from 'enzyme';
import Select from './../Select';
import renderer from 'react-test-renderer';

describe('Input component', () => {
    let component;
    const props = {
        className: 'className',
        value: 'Income',
        onChange: jest.fn()
    }
    beforeEach(() => {
        component = shallow(<Select {...props} />);
    });
    it('should render correctly', () => {
        //Snapshot testing.
        const tree = renderer.create(<Select {...props} />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('should render <input> tag', () => {
        const selectElement = component.find('select');
        expect(selectElement.length).toBe(1);
    });
});