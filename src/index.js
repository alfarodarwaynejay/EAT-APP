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
	setScheduleState 
} from './redux/reducers.js'

const rootReducer = combineReducers({ 
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
	setScheduleState 
});

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);