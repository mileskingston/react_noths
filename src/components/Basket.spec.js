import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Basket from './Basket';

describe('Basket', () => {
  const initialState = {
    basket: {
      items: [],
      total: "00.00"
    }
  };
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState)
    container = shallow(<Basket />)  
  })

  it('renders container', () => {
    expect(container.find('.basket').length).toEqual(1);
  });
});