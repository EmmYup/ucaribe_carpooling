import { combineReducers } from 'redux';
import app from './App/reducer';
import login from './Login/reducer';

export default combineReducers({
    app,
    login,
});
