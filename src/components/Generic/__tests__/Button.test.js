import React from 'react';
import { shallow } from 'enzyme';
import Button from './../Button';
import renderer from 'react-test-renderer';

describe('Button component', () => {
    let component;
    const props = {
        onClick: jest.fn(),
        buttonIcon: 'buttonIcon',
        className: 'className'
    }
    beforeEach(() => {
        component = shallow(<Button {...props} />);
    });
    it('should render correctly', () => {
        //Snapshot testing.
        const tree = renderer.create(<Button {...props} />)
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('should render <button> tag', () => {
        const buttonElement = component.find('button');
        expect(buttonElement.length).toBe(1);
    });
});
