import {
  applyMiddleware,
  createStore,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

const initState = {
  basket: {
    items: [],
    total: "00.00"
  }
};

const store = createStore(
  reducer,
  initState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
