import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import appStateReducer from './appStateReducer';
import productReducer from './productReducer';

export default combineReducers({
  loginReducer,
  appStateReducer,
  productReducer,
});
