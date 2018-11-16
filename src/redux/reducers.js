import moment from 'moment';

import { 
	ROUTE,
	EVALUATE,
	IS_GOD,

	SIGNIN_EMAIL,
	SIGNIN_PASSWORD,
	ON_SIGNIN_SUBMIT,
	LOGIN_FAILED,

	REGISTER_EMAIL,
	REGISTER_PASSWORD,
	REGISTER_NAME,
	REGISTER_EMPLOYEE_ID,
	ON_REGISTER_SUBMIT,
	REGISTER_FAILED,

	USER_NAME,
	USER_ID,
	USER_EMAIL,
	USER_POSITION,
	HOME_DISPLAY,
	ADMIN_ROUTE,
	STATS,
	TEAM,

	EVALUATE_ROUTE,
	EVALUATE_TEAMMATE,
	EVALUATE_QUESTIONAIRE,

	SCORE,
	EVALUATE_P_SUCCESS,
	EVALUATE_P_IS_PENDING,
	EVALUATE_P_ERROR,

	EMPLOYEE,

	VISIBILITY1,
	VISIBILITY2,
	VISIBILITY3,
	POSITION,
	SUBMITVALUE,
	SUBMIT_PROMOTE_EMPLOYEE,
	SUBMIT_DELETE_EMPLOYEE,
	EMPLOYEE_STATUS_RESET,

	EMPLOYEE_ID,
	CONFIRM_VISIBILITY,
	SUBMITNEWHIRE,
	NEWHIRE_RESET,

	NEWS,
	NEWS_VISIBILITY,
	SUBMITNEWS,

	START_DATE,
	END_DATE,
	OPEN_START,
	OPEN_END,
	SUBMIT_SCHEDULE,

	//for thunks
	SIGNIN_IS_PENDING,
	SIGNIN_ERROR,
	REGISTER_IS_PENDING,
	REGISTER_ERROR,
	TEAM_IS_PENDING,
	TEAM_ERROR,
	STATS_IS_PENDING,
	STATS_ERROR,
	HOME_MOUNT_IS_PENDING,
	HOME_MOUNT_ERROR,
	SUBMITNEWS_IS_PENDING,
	SUBMITNEWS_SUCCES,
	SUBMITNEWS_ERROR,
	NEWSRESET,
	GETNEWS_IS_PENDING,
	GETNEWS_ERROR,
	SUBMITSCHEDULE_IS_PENDING,
	SUBMITSCHEDULE_SUCESS,
	SUBMITSCHEDULE_ERROR,
	SUBMITSCHEDULE_RESET,
	EVALUATE_IS_PENDING,
	EVALUATE_ERROR,
	NEWS_HOME,
	NEWS_IS_PENDING,
	NEWS_ERROR,
	PROMOTE_IS_PENDING,
	PROMOTE_ERROR,
	DELETE_IS_PENDING,
	DELETE_ERROR,
	NEWHIRE_SUCCESS,
	NEWHIRE_IS_PENDING,
	NEWHIRE_ERROR,
	EMP_LIST_SUCCESS,
	EMP_LIST_IS_PENDING,
	EMP_LIST_ERROR,
	EVALUATE_P_RESET
} from './constants.js'

//Signin.js reducer
const initialStateAppJs = {
	route: 'signin',
	evaluate: false,
	isGod: true,
	loginFailed: false,
	signinIsPending: false,
	signinError: '',
	registerIsPending: false,
	registerError: '',
	registerFailed: false,
	evaluateIsPending: false,
	evaluateError: ''
}

export const setAppState = (state = initialStateAppJs, action = {}) => {
	switch(action.type) {
		case ROUTE:
			return { ...state, route: action.payload };
		case EVALUATE:
			return { ...state, evaluate: action.payload };
		case EVALUATE_IS_PENDING:
			return { ...state, evaluateIsPending: action.payload };
		case EVALUATE_ERROR:
			return { ...state, evaluateError: action.payload };
		case IS_GOD:
			return { ...state, isGod: action.payload };
		case LOGIN_FAILED:
			return { ...state, loginFailed: action.payload };
		case SIGNIN_IS_PENDING: 
			return { ...state, signinIsPending: action.payload };
		case SIGNIN_ERROR:
			return { ...state, signinError: action.payload };
		case REGISTER_IS_PENDING:
			return { ...state, registerIsPending: action.payload };
		case REGISTER_ERROR:
			return { ...state, registerError: action.payload };
		case REGISTER_FAILED:
			return { ...state, registerFailed: action.payload };
		default:
			return state;
	}
}

//Signin.js reducer
const initialSigninState = {
	signInEmail: '',
	signInPassword: '',
	signInSubmit: {}
};

export const setSigninState = (state=initialSigninState, action={}) => {
	switch(action.type) {
		case SIGNIN_EMAIL:
			return { ...state, signInEmail: action.payload, signInSubmit: { ...state.signInSubmit, email: action.payload } };
		case SIGNIN_PASSWORD:
			return { ...state, signInPassword: action.payload, signInSubmit: { ...state.signInSubmit, password: action.payload }  };
		default:
			return state;
	}
}

//Register.js reducer
const initialRegisterState = {
	email: '',
	password: '',
	name: '',
	id: ''
};

export const setRegisterState = (state=initialRegisterState, action={}) => {
	switch(action.type) {
		case REGISTER_EMAIL:
			return { ...state, email: action.payload };
		case REGISTER_PASSWORD:
			return { ...state, password: action.payload };
		case REGISTER_NAME:
			return { ...state, name: action.payload };
		case REGISTER_EMPLOYEE_ID:
			return { ...state, id: action.payload };
		default:
			return state;
	}
}

//Home.js reducer
const initialHomeState = {
	user_name: '',
	user_id: '',
	user_email: '',
	user_position:'',
	homeDisplay: 'defaultHome',
	adminRoute: 'adminHome',
	newsHome: [],
	getNewsIsPending: false,
	getNewsError: '',
	stats: [],
	team: [],
	empListSuccess: [],
	teamIsPending: false,
	teamError: '',
	statsIsPending: false,
	statsError:'',
};

export const setHomeState = (state=initialHomeState, action={}) => {
	switch(action.type) {
		case USER_NAME:
			return { ...state, user_name: action.payload };
		case USER_ID:
			return { ...state, user_id: action.payload };
		case USER_EMAIL:
			return { ...state, user_email: action.payload };
		case USER_POSITION:
			return { ...state, user_position: action.payload };
		case HOME_DISPLAY:
			return { ...state, homeDisplay: action.payload };
		case ADMIN_ROUTE:
			return { ...state, adminRoute: action.payload };
		case STATS:
			return { ...state, stats: action.payload };
		case TEAM:
			return { ...state, team: action.payload };
		case TEAM_IS_PENDING:
			return { ...state, teamIsPending: action.payload };
		case TEAM_ERROR: 
			return { ...state, teamError: action.payload };
		case STATS_IS_PENDING:
			return { ...state, statsIsPending: action.payload };
		case STATS_ERROR:
			return { ...state, statsError: action.payload };
		case EMP_LIST_SUCCESS:
			return { ...state, empListSuccess: action.payload };
		case NEWS_HOME:
			return { ...state, newsHome: action.payload };
		case GETNEWS_IS_PENDING:
			return { ...state, getNewsIsPending: action.payload };
		case GETNEWS_ERROR:
			return { ...state, getNewsError: action.payload };
		default:
			return state;
	}
}

//Evaluate.js reducer
const initialEvaluateState = {
	evaluateRoute: 'evaluate',
	evaluateTeamMate: {},
	questionaire: [
		//these are hard-coded questionaire...can be adapted to any organization
		'How do you rate his attendance?',
		'How do you rate his code effeciency?',
		'How do you rate his code readability?',
		'Is he/she team-player? Please rate his score.',
		'How knowlegable is he/she when it comes to using tools?',
		'Is he/she reasourceful? Does he/she do research anything related to task?',
		'Is he/she courteous?',
		'How do you rate his/her coding passion?',
		'What can you say about his/her grooming?'
	]
};

export const setEvaluateState = (state=initialEvaluateState, action={}) => {
	switch(action.type) {
		case EVALUATE_ROUTE:
			return { ...state, evaluateRoute: action.payload};
		case EVALUATE_TEAMMATE:
			return { ...state, evaluateTeamMate: {...state.evaluateTeamMate, ...action.payload } };
		default:
			return state;
	}
}

//EvaluatePerson.js reducer
const initialEvaluatePersonState = {
	evaluatePSuccess: false,
	evaluatePIsPending: false,
	evaluatePError: '',
	//these are initial values, 
	//if user does not toggle the slider and click Submit immediately
	//these values will be sent to back-end
	score: { 
		0 : 75,
		1 : 75,
		2 : 75,
		3 : 75,
		4 : 75,
		5 : 75,
		6 : 75,
		7 : 75,
		8 : 75
	}
};

export const setEvaluatePersonState = (state=initialEvaluatePersonState, action={}) => {
	switch(action.type) {
		case EVALUATE_P_SUCCESS:
			return { ...state, evaluatePSuccess: action.payload };
		case EVALUATE_P_IS_PENDING:
			return { ...state, evaluatePIsPending: action.payload };
		case EVALUATE_P_ERROR:
			return { ...state, evaluatePError: action.payload };
		case SCORE:
			return { ...state, score: { ...state.score, ...action.payload } };
		case EVALUATE_P_RESET:
			return initialEvaluatePersonState;
		default:
			return state;
	}
}

//AdminPanel.js reducer
const initialAdminPanelState = {
	employeeStatus: {}
}

export const setAdminPanelState = (state=initialAdminPanelState, action={}) => {
	switch(action.type) {
		case EMPLOYEE:
			return { ...state, employeeStatus: { ...state.employeeStatus, ...action.payload } };
		default:
			return state;
	}
}


//EmployeeStatus.js reducer
const initialEmployeeStatusState = {
	visibility1: false,
	visibility2: false,
	visibility3: false,
	promoteSuccess: false,//need to update this once request is successful
	position: '',
	submitValue: {},
	promoteIsPending: false,
	promoteError: '',
	deleteSuccess: false,
	deleteIsPending: false,
	deleteError: '',
};

export const setEmployeeStatusState = (state=initialEmployeeStatusState, action={}) => {
	switch(action.type) {
		case VISIBILITY1:
			return { ...state, visibility1: action.payload };
		case VISIBILITY2:
			return { ...state, visibility2: action.payload };
		case VISIBILITY3:
			return { ...state, visibility3: action.payload };
		case POSITION:
			return { ...state, position: action.payload };
		case SUBMITVALUE:
			return { ...state, submitValue: action.payload };
		case SUBMIT_PROMOTE_EMPLOYEE:
			return { ...state, promoteSuccess: action.payload };
		case PROMOTE_IS_PENDING:
			return { ...state, promoteIsPending: action.payload };
		case PROMOTE_ERROR:
			return { ...state, promoteError: action.payload };
		case SUBMIT_DELETE_EMPLOYEE:
			return { ...state, deleteSuccess: action.payload };
		case DELETE_IS_PENDING:
			return { ...state, deleteIsPending: action.payload };
		case DELETE_ERROR:
			return { ...state, deleteError: action.payload };
		case EMPLOYEE_STATUS_RESET:
			return initialEmployeeStatusState;
		default:
			return state;
	}
}

//NewHire.js reducer
const initialNewHireState = {
	employee_id: '',
	confirmVisibility: false,
	newhireSuccess: false,
	newhireIsPending: false,
	newhireError: '',	
	empListIsPending: false,
	empListError: '' 

};

export const setNewHireState = (state=initialNewHireState, action={}) => {
	switch(action.type) {
		case EMPLOYEE_ID:
			return { ...state, employee_id: action.payload };
		case CONFIRM_VISIBILITY:
			return { ...state, confirmVisibility: action.payload };
		case NEWHIRE_SUCCESS:
			return { ...state, newhireSuccess: action.payload };
		case NEWHIRE_IS_PENDING:
			return { ...state, newhireIsPending: action.payload };
		case NEWHIRE_ERROR:
			return { ...state, newhireError: action.payload };
		case EMP_LIST_IS_PENDING:
			return { ...state, empListIsPending: action.payload };
		case EMP_LIST_ERROR:
			return { ...state, empListError: action.payload };
		case NEWHIRE_RESET:
			return initialNewHireState;
		default:
			return state;
	}
}

//News.js reducer
const initialNewsState = {
	news: '',
	newsVisibility: false,
	submitNews: '',
	submitNewsIsPending: false,
	submitNewsSuccess: '',
	submitNewsError: '',
}

export const setNewsState = (state=initialNewsState, action={}) => {
	switch(action.type) {
		case NEWS:
			return { ...state, news: action.payload };
		case NEWS_VISIBILITY:
			return { ...state, newsVisibility: action.payload};
		case SUBMITNEWS:
			return { ...state, submitNews: action.payload };
		case SUBMITNEWS_IS_PENDING:
			return { ...state, submitNewsIsPending: action.payload };
		case SUBMITNEWS_SUCCES:
			return { ...state, submitNewsSuccess: action.payload };
		case SUBMITNEWS_ERROR:
			return { ...state, submitNewsError: action.payload };
		case NEWSRESET:
			return initialNewsState; 
		default:
			return state;
	}
}

//Schedule.js reducer
const initialScheduleState = {
	startDate: moment(),
	endDate: moment().add(7, 'days'),
	openStart: false,
	openEnd: false,
	submitScheduleIsPending: false,
	submitScheduleSuccess: false,
	submitScheduleError: ''
}

export const setScheduleState = (state=initialScheduleState, action={}) => {
	switch(action.type) {
		case START_DATE:
			return { ...state, startDate: action.payload };
		case END_DATE:
			return { ...state, endDate: action.payload };
		case OPEN_START:
			return { ...state, openStart: action.payload };
		case OPEN_END:
			return { ...state, openEnd: action.payload };
		case SUBMITSCHEDULE_IS_PENDING:
			return { ...state, submitScheduleIsPending: action.payload };
		case SUBMITSCHEDULE_SUCESS:
			return { ...state, submitScheduleSuccess: action.payload };
		case SUBMITSCHEDULE_ERROR:
			return { ...state, submitScheduleError: action.payload };
		case SUBMITSCHEDULE_RESET:
			return initialScheduleState;
		default:
			return state;
	}
}





