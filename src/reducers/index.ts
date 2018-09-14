import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { profile } from './profile';

const appReducer = combineReducers({
	profile,
	router: routerReducer
});

export { appReducer };
