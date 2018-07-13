export function addProduct(data) {
  return {
    type: 'ADD_PRODUCT',
    payload: {
      title: data.title,
      price: parseFloat(data.price)
    }
  };
}
