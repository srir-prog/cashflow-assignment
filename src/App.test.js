import React from 'react';
import { shallow } from "enzyme";
import App from './App';
import Header from './components/Header/Header';
import AddBudget from './components/Budget/AddBudget';


describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  });
  it('should contain <Header/> and <AddBudget/>', () => {
    expect(wrapper.containsAllMatchingElements([
      <Header />,
      <AddBudget />,
    ])).toEqual(true);
  });
});
