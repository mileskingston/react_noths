import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Product from './Product';

describe('Product', () => {
  const initialState = {
    basket: {
      items: [],
      total: "00.00"
    }
  };
  const data = {
    title: "Personalised cufflinks",
    price: "45.00",
    image_url: "../images/cufflinks.jpg"
  };
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState)
    container = shallow(<Product store={store} data={data} />)  
  })

  it('renders container', () => {
    expect(container.find('.product_summary').length).toEqual(1);
  });
});