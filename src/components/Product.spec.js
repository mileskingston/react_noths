import React from 'react';
import { mount } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import Product from './Product';

describe('Product', () => {
  let wrapper;
  
  beforeEach(() => {
    const mockStore = configureMockStore();
    const initData = {
      basket: {
        items: ['Cuff links'],
        total: 50
      }
    };
    const data = {
      'title': 'Cuff links',
      'price': '50',
      'image_url': '../images/cufflinks.jpg'
    };
    const store = mockStore(initData);
    wrapper = mount(
      <Product store={store} data={data} />
    );
  });

  it('renders container', () => {
    expect(wrapper.find('.product_summary').length).toBe(1);
  });
  it('renders correct title', () => {
    expect(wrapper.find('.product_title').text()).toBe('Cuff links');
  });
  it('renders correct price', () => {
    expect(wrapper.find('.product_price').text()).toBe('50');
  });
  it('renders correct image url', () => {
    expect(wrapper.find('.product_image').prop('src')).toBe('../images/cufflinks.jpg');
  });
});