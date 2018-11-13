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
	SUBMIT_SCHEDULE,

	//for thunks
	SIGNIN_IS_PENDING,
	SIGNIN_ERROR,
	REGISTER_IS_PENDING,
	REGISTER_ERROR,
	TEAM_IS_PENDING,
	TEAM_ERROR,
	STATS_IS_PENDING,
	STATS_ERROR
} from './constants.js'

const HOST = 'http://localhost:3000';

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

export const setLoginFailed = bool => ({
	type: LOGIN_FAILED,
	payload: bool
})

//need to fetch to server-----------------------------------------------------
export const onSubmitSignin = signinValue => dispatch => {

	dispatch({ type: SIGNIN_IS_PENDING, payload: true });

	fetch(`${HOST}/signin`, {
			method: 'post',
			headers: { 'Content-Type' : 'application/json'},
			body: JSON.stringify({
				email: signinValue.email,
				password: signinValue.password
			})
		})
		.then(response => response.json())
		.then(data => {
			if(data.status === 'correct') {
				//setting user data here:
				dispatch({type: USER_NAME, payload: data.name});
				dispatch({type: USER_ID, payload: data.employee_id});
				dispatch({type: USER_EMAIL, payload: data.email});
				dispatch({type: IS_GOD, payload: data.isGod})

				//this will route the user to home...
				dispatch({ type: ROUTE, payload: 'home'});
			} else {
				throw Error(`Login failed: response: ${data}...`)
			}
			//cleaning pending status
			dispatch({ type: SIGNIN_IS_PENDING, payload: false});
		})
	 	.catch(error => {
	 		dispatch({ type: SIGNIN_ERROR, payload: error});
	 		dispatch({type: LOGIN_FAILED, payload: true});
	 		dispatch({ type: SIGNIN_IS_PENDING, payload: false});
	 	});
};

//ACTIONS REGISTER.JS
export const setRegisterEmail = email => ({
	type: REGISTER_EMAIL,
	payload: email
});

export const setRegisterPassword = password => ({
	type: REGISTER_PASSWORD,
	payload: password
});

export const setRegisterName = name => ({
	type: REGISTER_NAME,
	payload: name
});

export const setRegisterEmployeeId = id => ({
	type: REGISTER_EMPLOYEE_ID,
	payload: id
});

export const setRegisterFailed = bool => ({
	type: REGISTER_FAILED,
	payload: bool
});

//need to fetch to server---------------------------------------------------
export const onSubmitRegister = registerValue => dispatch => {
	dispatch({ type: REGISTER_IS_PENDING, payload: true });

	fetch(`${HOST}/register`, {
			method: 'put',
			headers: { 'Content-Type' : 'application/json'},
			body: JSON.stringify({
				name: registerValue.name,
				employee_id: registerValue.id,
				email: registerValue.email,
				password: registerValue.password
			})
		})
		.then(response => response.json())
		.then(data => {
			if (data === 'success') {
				//re-route user to login page
				dispatch({ type: ROUTE, payload: 'signin' });
			} else {
				throw Error(`Unable to register user: Server Responded with ${data}`);
			}
			//cleaning pending status
			dispatch({ type: REGISTER_IS_PENDING, payload: false });
		})
		.catch(err => {
			dispatch({ type: REGISTER_ERROR, payload: err });
			dispatch({ type: REGISTER_FAILED, payload: true });
			dispatch({ type: REGISTER_IS_PENDING, payload: false });
		});
};

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

//need to fetch to server---------------------------------------------------
export const onHomeMount = user_id => dispatch => {
	dispatch({ type: TEAM_IS_PENDING, payload: true });
	dispatch({ type: STATS_IS_PENDING, payload: true });

	//fetching team here:
	fetch(`${HOST}/team`, {
			method : 'post',
			headers: {'Content-Type' : 'application/json'},
			body: JSON.stringify({ emp_id : user_id })
		})
		.then(response => response.json())
		.then(data => {
			//must deal with the failed response
			if (data === 'failed') {
				throw Error('You have no teammates. Note: if Admin, use your ordinary account');
			} else {
				dispatch({ type: TEAM, payload: data });
				dispatch({ type: TEAM_IS_PENDING, payload: false });	
			}
		})
		.catch(err => {
			dispatch({ type: TEAM_ERROR, payload: err});
			dispatch({ type: TEAM_IS_PENDING, payload: false });
		});

	//fetching stats here:
	fetch(`${HOST}/stats`, {
			method : 'post',
			headers: {'Content-Type' : 'application/json'},
			body: JSON.stringify({ emp_id : user_id })
		})
		.then(response => response.json())
		.then(data => {
			dispatch({ type: USER_POSITION, payload: data.position});

			if (data.status === 'success') {
				dispatch({ type: STATS, payload: calculateStats(data.stats) });
			} else {
				throw Error(data.status);
			}

			dispatch({ type: STATS_IS_PENDING, payload: false });
		})
		.catch(err => {
			dispatch({ type: STATS_ERROR, payload: err});
			dispatch({ type: STATS_IS_PENDING, payload: false });
		});
};

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
	payload: { ...sched}
});


//HELPER FUNCTIONS

//calculate the stats from response object
const calculateStats = (arr) => {
	//reduce the argument to single array with sums of items of an object 
	const tempArr = arr.reduce((acc, item) => {
		for(let [key, value] in Object.entries(item)) {
			acc[key] += item[key];
		}
		return acc;

	   //I could use << '0 '.repeat(Object.keys(arr[item]).length).split(' ') >> but is too cheeky
	}, [0,0,0,0,0,0,0,0,0]);

	//reduce the temporary array and return an object wrap in an array...because my state was earlier design in array..
	return [ 
		tempArr.reduce((acc, item, i) => {
			acc[i] = item/arr.length;
			return acc;
		}, {}) 
	];
}












