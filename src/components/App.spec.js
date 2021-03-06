import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import App from './App';

describe('App', () => {
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
      <App store={store} />
    );
  });

  it('renders container', () => {
    expect(wrapper.find('.app').length).toBe(1);
  });
});