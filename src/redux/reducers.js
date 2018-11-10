import moment from 'moment';

import { 
	ROUTE,
	EVALUATE,
	IS_GOD,

	SIGNIN_EMAIL,
	SIGNIN_PASSWORD,
	ON_SIGNIN_SUBMIT,

	REGISTER_EMAIL,
	REGISTER_PASSWORD,
	REGISTER_NAME,
	REGISTER_EMPLOYEE_ID,
	ON_REGISTER_SUBMIT,

	HOME_DISPLAY,
	ADMIN_ROUTE,
	STATS,
	TEAM,

	EVALUATE_ROUTE,
	EVALUATE_TEAMMATE,
	EVALUATE_QUESTIONAIRE,

	SCORE,

	EMPLOYEE,

	VISIBILITY1,
	VISIBILITY2,
	VISIBILITY3,
	POSITION,
	SUBMITVALUE,
	SUBMITEMPLOYEEUPDATETOSERVER ,

	EMPLOYEE_ID,
	CONFIRM_VISIBILITY,
	SUBMITNEWHIRE,

	NEWS,
	NEWS_VISIBILITY,
	SUBMITNEWS,

	START_DATE,
	END_DATE,
	OPEN_START,
	OPEN_END,
	SUBMIT_SCHEDULE
} from './constants.js'

//Signin.js reducer
const initialStateAppJs = {
	route: 'signin',
	evaluate: true,
	isGod: true
}

export const setAppState = (state = initialStateAppJs, action = {}) => {
	switch(action.type) {
		case ROUTE:
			return { ...state, route: action.payload };
		case EVALUATE:
			return { ...state, evaluate: action.payload };
		case IS_GOD:
			return { ...state, isGod: action.payload };
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
	homeDisplay: 'defaultHome',
	adminRoute: 'adminHome',
	stats: [
	  {
	    name: 'Ovuvwevwevwe Onyentenyevwe Ugwemubwem Ossas',
	    employee_id: 12345611,
	    position: 'Juniour Dev',
	    attendance: '90%',
	    code_effeciency: '85%',
	    code_readability: '85%',
	    team_player: '100%',
	    tools_iq: '97%',
	    resourceful: '101%',
	    courteous: '97%',
	    coding_passion: '97%',
	    hype_beast: '97%'
	  }
		],
	team: [
	  {name: 'ervin', email: 'ervin@gmail.com', position: 'SD', employee_id: 1234567},
	  {name: 'monica', email: 'monica@gmail.com', position: 'TL', employee_id: 1234568},
	  {name: 'ernesto', email: 'ernesto@gmail.com', position: 'SM', employee_id: 1234569},
	  {name: 'jeane', email: 'jeane@gmail.com', position: 'IA', employee_id: 1234560},
	  {name: 'lyndon', email: 'aramina@gmail.com', position: 'UX', employee_id: 1234561},
	  {name: 'mauro', email: 'mauro@gmail.com', position: 'UI', employee_id: 1234562},
	  {name: 'fillipo', email: 'fillipo@gmail.com', position: 'QA', employee_id: 1234563},
	  {name: 'goku', email: 'sangoku@gmail.com', position: 'BE', employee_id: 1234564},
	  {name: 'naruto', email: 'naruto@gmail.com', position: 'PM', employee_id: 1234565},
	  {name: 'neo anderson', email: 'matrix@gmail.com', position: 'JD', employee_id: 1234566},
	]
};

export const setHomeState = (state=initialHomeState, action={}) => {
	switch(action.type) {
		case HOME_DISPLAY:
			return { ...state, homeDisplay: action.payload };
		case ADMIN_ROUTE:
			return { ...state, adminRoute: action.payload };
		case STATS:
			return { ...state, stats: action.payload };
		case TEAM:
			return { ...state, team: action.payload };
		default:
			return state;
	}
}

//Evaluate.js reducer
const initialEvaluateState = {
	evaluateRoute: 'evaluate',
	evaluateTeamMate: {},
	questionaire: [
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
		case SCORE:
			return { ...state, score: { ...state.score, ...action.payload } };
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
	updateSuccess: false,//need to update this once request is successful
	position: '',
	submitValue: {}
};

export const setEmployeeStatusState = (state=initialEmployeeStatusState, action={}) => {
	switch(action.type) {
		case VISIBILITY1:
			return { ...state, visibility1: action.payload }
		case VISIBILITY2:
			return { ...state, visibility2: action.payload }
		case VISIBILITY3:
			return { ...state, visibility3: action.payload }
		case SUBMITVALUE:
			return { ...state, submitValue: { ...state.submitValue, ...action.payload } }
		case SUBMITEMPLOYEEUPDATETOSERVER:
			return { ...state, updateSuccess: action.payload}
		default:
			return state;
	}
}

//NewHire.js reducer
const initialNewHireState = {
	employee_id: '',
	confirmVisibility: false

};

export const setNewHireState = (state=initialNewHireState, action={}) => {
	switch(action.type) {
		case EMPLOYEE_ID:
			return { ...state, employee_id: action.payload };
		case CONFIRM_VISIBILITY:
			return { ...state, confirmVisibility: action.payload };
		default:
			return state;
	}
}

//News.js reducer
const initialNewsState = {
	news: '',
	newsVisibility: false
}

export const setNewsState = (state=initialNewsState, action={}) => {
	switch(action.type) {
		case NEWS:
			return { ...state, news: action.payload }
		case NEWS_VISIBILITY:
			return { ...state, newsVisibility: action.payload}
		default:
			return state;
	}
}

//Schedule.js reducer
const initialScheduleState = {
	startDate: moment(),
	endDate: moment().add(7, 'days'),
	openStart: false,
	openEnd: false
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
		default:
			return state;
	}
}





