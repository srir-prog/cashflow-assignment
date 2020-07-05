import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import AddBudget from './../AddBudget';
import BudgetList from './../BudgetList';
import configureStore from 'redux-mock-store';
import Button from './../../Generic/Button';
import Input from './../../Generic/Input';

const mockStore = configureStore({});

let store;

let component;
beforeEach(() => {

    store = mockStore({
        budget: {
            allItems: { income: [], expense: [] },
            totals: { income: 0, expense: 0 }
        }
    });

    component = renderer.create(
        <Provider store={store}>
            <AddBudget />
        </Provider>
    );
});
it('should render correctly', () => {
    //Snapshot testing.
    expect(component.toJSON()).toMatchSnapshot();
});

it('should contains <BudgetList/> component', () => {
    let component = shallow(
        <Provider store={store}>
            <AddBudget />
        </Provider>
    );
    expect(component.containsMatchingElement(<BudgetList />)).toEqual(false);
});

it('should check for add button click', () => {
    const mockAddBtnClick = jest.fn();
    let buttonElement = shallow(<Button onClick={mockAddBtnClick} />);
    buttonElement.find('button').props().onClick();
    expect(mockAddBtnClick).toHaveBeenCalled();
});

it('should check for add description input', () => {
    const mockChangeEvent = jest.fn();
    let inputElement = shallow(<Input onChange={mockChangeEvent} value="Salary" />);
    inputElement.find('input').simulate('change', { target: { value: "Salary" } });
    expect(inputElement.find('input').prop('value')).toEqual("Salary");
});

it('should check for cost input', () => {
    const mockChangeEvent = jest.fn();
    let inputElement = shallow(<Input onChange={mockChangeEvent} value="10" />);
    inputElement.find('input').simulate('change', { target: { value: "10" } });
    expect(inputElement.find('input').prop('value')).toEqual("10");
});