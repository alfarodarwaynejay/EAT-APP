
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
	SUBMITEMPLOYEEUPDATETOSERVER,

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

//ACTIONS APP.JS
export const setRoute = route => ({
	type: ROUTE,
	payload: route
});

export const setEvaluate = value => ({
	type: EVALUATE,
	payload: value
});

export const setGod = value => ({
	type: IS_GOD,
	payload: value
});

//ACTIONS SIGNIN.JS
export const setEmail = email => ({
	type: SIGNIN_EMAIL,
	payload: email
});

export const setPassword = password => ({
	type: SIGNIN_PASSWORD,
	payload: password
});

//need to fetch to server-----------------------------------------------------
export const onSubmitSignin = value => ({
	type: ON_SIGNIN_SUBMIT,
	payload: value
});

//ACTIONS REGISTER.JS
export const setRegisterEmail = email => ({
	type: REGISTER_EMAIL,
	payload: email
});

export const setRegisterPassword = password => ({
	type: REGISTER_PASSWORD,
	payload: password
})

export const setRegisterName = name => ({
	type: REGISTER_NAME,
	payload: name
});

export const setRegisterEmployeeId = id => ({
	type: REGISTER_EMPLOYEE_ID,
	payload: id
});

//need to fetch to server---------------------------------------------------
export const onSubmitRegister = value => ({
	type: ON_REGISTER_SUBMIT,
	payload: value
});

//ACTIONS HOME.JS
export const setHomeDisplay = route => ({ 
	type: HOME_DISPLAY,
	payload: route
});

export const setAdminRoute = route => ({ 
	type: ADMIN_ROUTE,
	payload: route
});

export const setStats = stats => ({ 
	type: STATS,
	payload: stats
});

export const setTeam =  team => ({
	type: TEAM,
	payload: team
});


//ACTIONS EVALUATE.JS
export const setEvaluateRoute = route => ({
	type: EVALUATE_ROUTE,
	payload: route
});

export const setEvaluateTeammate = person => ({
	type: EVALUATE_TEAMMATE,
	payload: {
		name: person.name,
	    employee_id: person.employee_id,
	    position: person.position
	}
});

//ACTIONS EVALUATEPERSON.JS
export const toggleScore = score => ({
	type: SCORE,
	payload: { ...score }
});

//need to fetch to server---------------------------------------------------
export const onSubmitEvaluatePerson = value => ({
	type: ON_REGISTER_SUBMIT,
	payload: value
});


//ACTIONS ADMINPANEL.JS
export const setEmployeeStatus = person => ({
	type: EMPLOYEE,
	payload: {
		name: person.name,
	    employee_id: person.employee_id,
	    position: person.position
	}
});

//ACTIONS EMPLOYEESTATUS.JS
export const setVisibility1 = visibility => ({
	type: VISIBILITY1,
	payload: visibility
});

export const setVisibility2 = visibility => ({
	type: VISIBILITY2,
	payload: visibility
});

export const setVisibility3 = visibility => ({
	type: VISIBILITY3,
	payload: visibility
});

export const setPosixon = pos => ({
	type: POSITION,
	payload: pos
});

export const setSubValue = value => ({
	type: SUBMITVALUE,
	payload: {
		...value
	}
});

//need to fetch server here--------------------------------------------
export const submitEmployeeUpdateToServer = value => ({
	type: SUBMITEMPLOYEEUPDATETOSERVER,
	payload: {
		...value
	}
});

//ACTIONS NEWHIRE.JS
export const setEmployID = value => ({
	type:EMPLOYEE_ID,
	payload: value
});

export const setConfirmVis = visibility => ({
	type: CONFIRM_VISIBILITY,
	payload: visibility
});

//need to fetch server here--------------------------------------------
export const submitNewHire = empId => ({
	type: SUBMITNEWHIRE,
	payload: empId
});

//ACTIONS NEWS.JS
export const setNewsText = news => ({
	type: NEWS,
	payload: news
});

export const setNewsVisible = visibility => ({
	type: NEWS_VISIBILITY,
	payload: visibility
});

//need to fetch server here--------------------------------------------
export const submitNews = news => ({
	type: SUBMITNEWS,
	payload: news
});

//ACTIONS SCHEDULE.JS
export const setStart = start => ({
	type: START_DATE,
	payload: start
});

export const setEnd = end => ({
	type: END_DATE,
	payload: end
});

export const setStartVisibility = visibility => ({
	type: OPEN_START,
	payload: visibility
});

export const setEndVisibility = visibility => ({
	type: OPEN_END,
	payload: visibility
});

//need to fetch server here--------------------------------------------
export const submitSchedule = sched => ({
	type: SUBMIT_SCHEDULE,
	payload: sched
});















