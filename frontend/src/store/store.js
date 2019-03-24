import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

export const history = createBrowserHistory();

const configureStore = (initialState = {}) => {
  const middleWares = [thunk, routerMiddleware(history)];
  return createStore(
    rootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middleWares))
  );
};

export default configureStore;
