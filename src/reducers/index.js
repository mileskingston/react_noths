export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const basketTotal = parseFloat(state.basket.total) + action.payload.price;
      const itemsArray = state.basket.items;

      return {
        ...state,
        basket: {
          items: [ ...state.basket.items, action.payload.title ],
          total: basketTotal.toFixed(2)
        }
      };
    }
    default: {
      return {
        ...state
      }
    }
  }
}
