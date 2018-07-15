import { addProduct } from './index';

const data = {
  title: 'Cuff links',
  price: '50.00'
};

describe('Actions', () => {
  it('Action addProduct', () => {
    const add = addProduct(data);
    expect(add).toEqual({
      type: "ADD_PRODUCT", 
      payload: {
        title: 'Cuff links',
        price: 50
      } 
    });
  });
});