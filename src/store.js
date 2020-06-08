import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const middleware = applyMiddleware(thunk);

const store = createStore(
  reducer,
  {},
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  ),
);

export default store;
