import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//importing reducers here-------
import { 
	setAppState, 
	setSigninState,
	setRegisterState,
	setHomeState,
	setEvaluateState,
	setEvaluatePersonState,
	setAdminPanelState 
} from './redux/reducers.js'


import App from './containers/App';

import './index.css';
import 'tachyons';

const logger = createLogger();
const rootReducer = combineReducers({ 
	setAppState, 
	setSigninState,
	setRegisterState,
	setHomeState,
	setEvaluateState,
	setEvaluatePersonState,
	setAdminPanelState 
});


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);