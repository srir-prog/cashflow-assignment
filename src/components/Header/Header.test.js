import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from './Header';

let component;
beforeEach(() => {
    //Mock out "react-i18next" library.
    jest.mock("react-i18next");
    component = shallow(<Header />);
});
it('should render correctly', () => {
    //Snapshot testing.
    const tree = renderer.create(<Header />);
    expect(tree.toJSON()).toMatchSnapshot();
});
it('should render <img>', () => {
    const imageElement = component.find('img');
    expect(imageElement.length).toBe(1);
});
it('should render buttons', () => {
    const buttonElement = component.find('button');
    expect(buttonElement.length).toBe(2);
});
