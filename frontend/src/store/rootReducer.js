import { combineReducers } from 'redux';
import settingsReducer from '../App/SettingsPage/SettingsStore/SettingsStore';
import appReducer from '../App/AppStore';

const rootReducer = combineReducers({
  settings: settingsReducer,
  app: appReducer,
});

export default rootReducer;
