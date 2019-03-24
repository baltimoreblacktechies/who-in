import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import events from './eventsReducer';
import auth from './authReducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    events,
    auth
  });
