import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import App from './master/App';

import './index.css';
import 'tachyons';

//importing reducers here-------
import { 
	setAppState, 
	setSigninState,
	setRegisterState,
	setHomeState,
	setEvaluateState,
	setEvaluatePersonState,
	setAdminPanelState,
	setEmployeeStatusState,
	setNewHireState,
	setNewsState,
	setScheduleState,
	setProfileState, 
	setEmpStatState
} from './redux/reducers.js'

const appReducer = combineReducers({ 
	setAppState, 
	setSigninState,
	setRegisterState,
	setHomeState,
	setEvaluateState,
	setEvaluatePersonState,
	setAdminPanelState,
	setEmployeeStatusState,
	setNewHireState,
	setNewsState,
	setScheduleState,
	setProfileState,
	setEmpStatState
});

const rootReducer = (state, action) => {
	if (action.type === 'LOG_OUT' ) {
		state = undefined;
	}

	return appReducer(state, action);
}

const loadState = () => {
	try {
		const serializedState = localStorage.getItem('reduxState');
		if (serializedState === null) return undefined;
		return JSON.parse(serializedState);
	} catch (err) {
		console.log(err);
		return undefined;
	} 
}

const saveState = (store) => {
	try {
		const serializedState = JSON.stringify(store.getState());
		localStorage.setItem('reduxState', serializedState);
	} catch (err) {
		console.log(err);
	}
}

const logger = createLogger();

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, applyMiddleware(thunkMiddleware, logger));
store.subscribe(() => { saveState(store); });
//console.log(store);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);




