import moment from 'moment';

import { 
	LOG_OUT,
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
	NEWS_FRONT_PAGE,

	START_DATE,
	END_DATE,
	OPEN_START,
	OPEN_END,
	SUBMIT_SCHEDULE,

	IMAGE_SRC,
	CAM_VISIBILITY,
	PROFILE_SRC,
	TOGGLE_SUCCESS,

	EMP_STAT_LIST,
	EMP_STAT_IS_PENDING,
	EMP_STAT_ERROR,
	EMP_STAT_SHOW,
	EMP_STAT_ORDER,

	//for thunks
	SIGNIN_IS_PENDING,
	SIGNIN_ERROR,
	REGISTER_IS_PENDING,
	REGISTER_ERROR,
	TEAM_IS_PENDING,
	TEAM_ERROR,
	STATS_IS_PENDING,
	STATS_ERROR,
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
	EVALUATE_P_RESET,
	PROFILE_SUCCESS,
	PROFILE_IS_PENDING,
	PROFILE_ERROR,
	PROFILE_RESET
} from './constants.js'

//heroku server
const HOST =  'https://eat-app-backend.herokuapp.com'; // 
//local server
// const HOST = 'http://localhost:3000';

//reset store
export const resetStore = () => ({ type: LOG_OUT });

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

export const toggleNewsFrontPage = bool => ({
	type: NEWS_FRONT_PAGE,
	payload: bool
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

export const togglePSuccess = bool => ({ 
	type: EVALUATE_P_SUCCESS, 
	payload: bool
});

export const evaluatePReset = () => ({ type: EVALUATE_P_RESET });


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

export const setEmployeeStatusReset = () => ({ type: EMPLOYEE_STATUS_RESET });

//ACTIONS NEWHIRE.JS
export const setEmployID = value => ({
	type:EMPLOYEE_ID,
	payload: value
});

export const setConfirmVis = visibility => ({
	type: CONFIRM_VISIBILITY,
	payload: visibility
});

export const newhireReset = () => dispatch => {
	dispatch({ type: NEWHIRE_RESET});
	fetchEmpList(dispatch);
};

//ACTIONS NEWS.JS
export const setNewsText = news => ({
	type: SUBMITNEWS,
	payload: news
});

export const setNewsVisible = visibility => ({
	type: NEWS_VISIBILITY,
	payload: visibility
});

export const resetSubmitNews = () => ({ type: NEWSRESET });

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

export const resetSubmitSchedule = () => ({ type: SUBMITSCHEDULE_RESET });

//Profile.js actions
export const setImageSrc = src => ({ 
	type: IMAGE_SRC, 
	payload: src
});

export const toggleCamVisibility = bool => ({
	type: CAM_VISIBILITY,
	payload: bool
});

export const toggleSuccess = bool => ({ type: TOGGLE_SUCCESS, payload: bool });

export const profileReset = () => ({ type: PROFILE_RESET });

//EmpList.js actions
export const toggleShowEmpList = bool => ({
	type: EMP_STAT_SHOW,
	payload: bool
});

export const setEmpStatList = list => ({
	type: EMP_STAT_LIST,
	payload: list
});

export const setEmpStatOrder = value => ({
	type: EMP_STAT_ORDER,
	payload: value
});

//---------------------------------------------------------------
//FUNCTIONS THAT USES THUNK
//---------------------------------------------------------------

//need to fetch to server to verify signin
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

//need to fetch to server to add user info to database
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

//need to fetch to server to initialize Home.js' states
export const onHomeMount = user_id => dispatch => {
	dispatch({ type: STATS_IS_PENDING, payload: true });
	dispatch({ type: EVALUATE_IS_PENDING, payload: true });
	dispatch({ type: NEWS_IS_PENDING, payload: true });

	//fetching team here:
	dispatch(fetchTeam(user_id));
	//fetching employee numbers list
	fetchEmpList(dispatch);

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
				dispatch({ type: STATS, payload: [calculateStats(data.stats)] });
			} else {
				throw Error(data.status);
			}

			dispatch({ type: STATS_IS_PENDING, payload: false });
		})
		.catch(err => {
			dispatch({ type: STATS_ERROR, payload: err});
			dispatch({ type: STATS_IS_PENDING, payload: false });
		});
	//fetching evaluate schedule here:
	fetch(`${HOST}/getschedule`, {
			method : 'post',
			headers: {'Content-Type' : 'application/json'},
			body: JSON.stringify({ get : true })
		})
		.then(response => response.json())
		.then(data => {
			if (data === 'incorrect form submission') {
				throw Error(data);
			} else {
				const today = moment().format('DD-MM-YYYY');
				if( data.start <= today && today <= data.end ) {
					dispatch({ type: EVALUATE, payload: true });
				}
			}

			dispatch({ type: EVALUATE_IS_PENDING, payload: false });
		})
		.catch(err => {
			dispatch({ type: EVALUATE_ERROR, payload: err});
			dispatch({ type: EVALUATE_IS_PENDING, payload: false });
		});

	//fetching news here
	fetch(`${HOST}/getnews`, {
			method : 'post',
			headers: {'Content-Type' : 'application/json'},
			body: JSON.stringify({ reqNews : true })
		})
		.then(response => response.json())
		.then(data => {
			if (data === 'incorrect form submission') {
				throw Error(data);
			} else {
				dispatch({ type: NEWS_HOME, payload: data.reverse() });
			}

			dispatch({ type: NEWS_IS_PENDING, payload: false });
		})
		.catch(err => {
			dispatch({ type: NEWS_ERROR, payload: err});
			dispatch({ type: NEWS_IS_PENDING, payload: false});
		});
};

//need to fetch to server to update person's evaluation
export const onSubmitEvalPerson = value => dispatch => {
	const { evaluator } = value;
	dispatch({ type: EVALUATE_P_IS_PENDING, payload: true });

	fetch(`${HOST}/evaluate`, {
		method: 'put',
		headers: {'Content-Type' : 'application/json'},
		body: JSON.stringify(value)
	})
		.then(response => response.json())
		.then(data => {
			if (data !== 'success') {
				throw Error(`Unable to evaluate teammate: Server Responded with ${data}`)
			}

			setTimeout(() => {
				dispatch({ type: EVALUATE_P_IS_PENDING, payload: false });
				dispatch({ type: EVALUATE_P_SUCCESS, payload: true });
			}, 3000);
		})
		.catch(err => {
			dispatch({ type: EVALUATE_ERROR, payload: err });
			dispatch({ type: EVALUATE_P_IS_PENDING, payload: false });
		})

	//re-fetch team
	//fetchTeam(evaluator, dispatch)
};

//need to fetch server and update employee position
export const submitPromoteEmployee = value => dispatch => {
	const {god_id, ...toServer} = value;
	dispatch({ type: PROMOTE_IS_PENDING, payload: true });

	fetch(`${HOST}/promote`, {
		method: 'put',
		headers: { 'Content-Type' : 'application/json'},
		body: JSON.stringify(toServer)
	})
		.then(response => response.json())
		.then(data => {
			if (data === 'success') {
				dispatch({ type: SUBMIT_PROMOTE_EMPLOYEE, payload: true });
			} else {
				throw Error(`Unable to promote: Server responded with '${data}'`);
			}
			dispatch({ type: PROMOTE_IS_PENDING, payload: false });
		})
		.catch(err => {
			dispatch({ type: PROMOTE_ERROR, payload: err });
			dispatch({ type: PROMOTE_IS_PENDING, payload: false });
		});

	//re-fetch team
	fetchTeam(god_id, dispatch);
};

//need to fetch server and delete employee from database
export const submitDeleteEmployee = value => dispatch => {
	const { god_id, ...toServer } = value;
	console.log(toServer);
	dispatch({ type: DELETE_IS_PENDING, payload: true });

	fetch(`${HOST}/delete`, {
		method: 'put',
		headers: { 'Content-Type' : 'application/json'},
		body: JSON.stringify(toServer)
	})
		.then(response => response.json())
		.then(data => {
			if (data === 'success') {
				dispatch({ type: SUBMIT_DELETE_EMPLOYEE, payload: true });
			} else {
				throw Error(`Unable to delete: Server responded with '${data}'`);
			}
			dispatch({ type: DELETE_IS_PENDING, payload: false });
		})
		.catch(err => {
			dispatch({ type: DELETE_ERROR, payload: err });
			dispatch({ type: DELETE_IS_PENDING, payload: false });
		});

	//re-fetch team
	dispatch(fetchTeam(god_id));
};

//need to fetch server and submit new hire employee id
export const submitNewHire = empId => dispatch => {
	dispatch({ type: NEWHIRE_IS_PENDING, payload: true });

	fetch(`${HOST}/add`, {
		method: 'put',
		headers: { 'Content-Type' : 'application/json'},
		body: JSON.stringify({ emp_id: empId})
	})
		.then(response => response.json())
		.then(data => {
			if(data === 'success') {
				dispatch({ type: NEWHIRE_IS_PENDING, payload: false });
				dispatch({ type: NEWHIRE_SUCCESS, payload: true });
			} else {
				throw Error(`Unable to add employee id: Server responded with '${data}'`);
			}
		})
		.catch(err => {
			dispatch({ type: NEWHIRE_ERROR, payload: err });
			dispatch({ type: NEWHIRE_IS_PENDING, payload: false})
		})
};

//need to fetch server and update news list
export const onSubmitNews = value => dispatch => {
	dispatch({ type: SUBMITNEWS_IS_PENDING, payload: true });

	fetch(`${HOST}/news`, {
		method: 'put',
		headers: { 'Content-Type' : 'application/json'},
		body: JSON.stringify({ news: value })
	})
		.then(response => response.json())
		.then(data => {
			if (data === 'success') {
				dispatch({ type: SUBMITNEWS_SUCCES, payload: data });
			} else {
				throw Error('Sending news failed. Please try again');
			}

		})
		.catch(err => {
			dispatch({ type: SUBMITNEWS_IS_PENDING, payload: false });
			dispatch({ type: SUBMITNEWS_ERROR, payload: err })
		})
};

//need to fetch server and set evaluation schedule
export const onSubmitSchedule = sched => dispatch => {
	dispatch({ type: SUBMITSCHEDULE_IS_PENDING, payload: true });

	fetch(`${HOST}/setschedule`, {
		method: 'put',
		headers: {'Content-Type' : 'application/json'},
		body: JSON.stringify(sched)
	})
		.then(response => response.json())
		.then(data => {
			if (data === 'success') {
				const today = moment().format('DD-MM-YYYY');
				dispatch({ type: SUBMITSCHEDULE_SUCESS, payload: true });
				dispatch({ type: EVALUATE, payload: (sched.start <= today && today <= sched.end) });
			} else {
				throw Error(data);
			}
			dispatch({ type: SUBMITSCHEDULE_IS_PENDING, payload: false });
		})
		.catch(err => {
			dispatch({ type: SUBMITSCHEDULE_ERROR, payload: err });
			dispatch({ type: SUBMITSCHEDULE_IS_PENDING, payload: false });
		})
};

//need to fetch server and set profile fix
export const setProfilePix = value => dispatch => {
	dispatch({ type: PROFILE_IS_PENDING, payload: true });

	fetch(`${HOST}/profile`, {
		method: 'put',
		headers: { 'Content-Type' : 'application/json'},
		body: JSON.stringify(value)
	})
		.then(response => response.json())
		.then(data => {
			if (data === 'success') {
				dispatch({ type: PROFILE_SUCCESS, payload: true });
			} else {
				throw Error(`Unable to delete: Server responded with '${data}'`);
			}	
			dispatch({ type: PROFILE_IS_PENDING, payload: false });
		})
		.catch(err => {
			dispatch({ type: PROFILE_IS_PENDING, payload: false });
			dispatch({ type: PROFILE_ERROR, payload: err });
		})
};

export const fetchEmpStat = () => dispatch => {
	dispatch({ type: EMP_STAT_IS_PENDING, payload: true });

	fetch(`${HOST}/empstats`, {
		method: 'post',
		headers: { 'Content-Type' : 'application/json'},
		body: JSON.stringify({ get: true })
	})
		.then(response => response.json())
		.then(data => {
			if (data.status === 'success') {
				//
				const employee_list = data.list.map( item => {
					let { _id, name, position, stats, profile, team } = item;
					let overall;

					let list_values = {
						name, 
						position,
						team,
						profile,
						employee_id: _id,
					}

					if (stats.length === 0) {
						overall = 0
					} else {
						let statsAverage = calculateStats(stats);
						console.log(statsAverage);

						//need to convert statsAverage to an array and pass it to calculateOverAll;
						overall = calculateOverAll(Object.keys(statsAverage).map( item => statsAverage[item]));
					}

					return { ...list_values, overall }

				})

				dispatch({ type: EMP_STAT_LIST, payload: employee_list });

			} else {
				throw Error(`Unable to fetch statistics: Server responded with '${data}'`);
			}	
			dispatch({ type: EMP_STAT_IS_PENDING, payload: false });
		})
		.catch(err => {
			dispatch({ type: EMP_STAT_IS_PENDING, payload: false });
			dispatch({ type: EMP_STAT_ERROR, payload: err });
		})
}

//---------------------------------------------------------------
//HELPER FUNCTIONS
//---------------------------------------------------------------

export const fetchTeam = (user_id) => (dispatch) => {
	dispatch({ type: TEAM_IS_PENDING, payload: true });

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
				const src = data.filter(item => item.employee_id === user_id);

				dispatch({ type: PROFILE_SRC, payload: src[0].profile})
				dispatch({ type: TEAM, payload: data });
				dispatch({ type: TEAM_IS_PENDING, payload: false });	
			}
		})
		.catch(err => {
			dispatch({ type: TEAM_ERROR, payload: err});
			dispatch({ type: TEAM_IS_PENDING, payload: false });
		});
};

const fetchEmpList = dispatch => {
	console.log('CALLED');
	dispatch({ type: EMP_LIST_IS_PENDING, payload: true });

	fetch(`${HOST}/getemplist`, {
		method: 'post',
		headers: { 'Content-Type' : 'application/json'},
		body: JSON.stringify({ get : true })
	})
		.then(response => response.json())
		.then(data => {
			if(data.length !== 0) {
				dispatch({ type: EMP_LIST_SUCCESS, payload: data });
			} else {
				throw Error(`Unable to fetch employees number: Server responded with '${data}'`);
			}
		})
		.catch(err => {
			dispatch({ type: EMP_LIST_IS_PENDING, payload: false});
			dispatch({ type: EMP_LIST_ERROR, payload: err });
		})
};

//calculate the stats from response object
const calculateStats = (arr) => {
	//reduce the argument to single array with sums of items of an object 
	const tempArr = arr.reduce((acc, item) => {
		for(let [key, value] in Object.entries(item)) {
			acc[key] += item[key];
		}
		return acc;

	   //I could use << '0 '.repeat(Object.keys(arr[0]).length).split(' ') >> but it's too cheeky
	}, [0,0,0,0,0,0,0,0,0]);

	//reduce the temporary array and return an object wrap in an array(because my state was earlier design in array)..
	return tempArr.reduce((acc, item, i) => {
		acc[i] = item/arr.length;
		return acc;
	}, {});
};

//calucalte the overall average of employee
const calculateOverAll = arr => {
	return arr.reduce( (a , b) => { return a + b }) / arr.length
}








