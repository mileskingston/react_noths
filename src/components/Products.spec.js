import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import Products from './Products';

describe('Products', () => {
  let wrapper;
  
  beforeEach(() => {
    const mockStore = configureMockStore();
    const initData = {
      basket: {
        items: ['Cuff links'],
        total: 50
      }
    };
    const data = [{
      'title': 'Cuff links',
      'price': '50',
      'image_url': '../images/cufflinks.jpg'
    }];
    const store = mockStore(initData);
    wrapper = shallow(
      <Products data={data} />
    );
  });

  it('renders container', () => {
    expect(wrapper.find('.product_summary_collection').length).toBe(1);
  });
});