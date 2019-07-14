import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { profile } from './profile';

const createRootReducer = (history: any) => combineReducers({
	profile,
	router: connectRouter(history)
});

export { createRootReducer };
