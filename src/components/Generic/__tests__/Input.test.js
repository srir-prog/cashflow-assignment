import React from 'react';
import { shallow } from 'enzyme';
import Input from './../Input';
import renderer from 'react-test-renderer';

describe('Input component', () => {
    let component;
    const props = {
        name: 'input',
        type: 'text',
        className: 'className',
        placeholder: 'placeholder',
        value: 'Income',
        onChange: jest.fn()
    }
    beforeEach(() => {
        component = shallow(<Input {...props} />);
    });
    it('should render correctly', () => {
        //Snapshot testing.
        const tree = renderer.create(<Input {...props} />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('should render <input> tag', () => {
        const inputElement = component.find('input');
        expect(inputElement.length).toBe(1);
    });
});