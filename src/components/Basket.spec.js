import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import Basket from './Basket';

describe('Basket', () => {
  let wrapper;
  
  beforeEach(() => {
    const mockStore = configureMockStore();
    const initData = {
      basket: {
        items: ['Cuff links'],
        total: 50
      }
    };
    const store = mockStore(initData);
    wrapper = shallow(
      <Basket store={store} />
    );
  });

  it('renders container', () => {
    expect(wrapper.dive().find('.basket').length).toBe(1);
  });

  it('renders correct item', () => {
    expect(wrapper.dive().find('.products .item').text()).toBe('Cuff links');
  });

  it('renders correct item', () => {
    expect(wrapper.dive().find('.products .quantity').text()).toBe('1');
  });

  it('renders correct total', () => {
    expect(wrapper.dive().find('.total .amount').text()).toBe('50');
  });
});