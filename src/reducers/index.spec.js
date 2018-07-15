import React from 'react';
import renderer from 'react-test-renderer';

import reducer from './index';

describe('Reducers', () => {
  it('Reducer for addProduct', () => {
    let state = {
      basket: {
        items: [],
        total: 0
      }
    };

    state = reducer(state, { 
      type: "ADD_PRODUCT", 
      payload: {
        title: 'Cuff links',
        price: 50
      }
    });

    expect(state).toEqual({
      basket: {
        items: ['Cuff links'],
        total: '50.00'
      }
    });
  });
});