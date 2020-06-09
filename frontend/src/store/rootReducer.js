import { combineReducers } from 'redux';
import appReducer from '../App/AppStore';

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
