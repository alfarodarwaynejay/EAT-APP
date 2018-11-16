//App.js states
export const ROUTE 							= 'ROUTE';
export const EVALUATE 						= 'EVALUATE';
export const IS_GOD 						= 'IS_GOD';

//Signin.js states
export const SIGNIN_EMAIL 					= 'SIGNIN_EMAIL';
export const SIGNIN_PASSWORD 				='SIGNIN_PASSWORD';
export const ON_SIGNIN_SUBMIT 				= 'ON_SIGNIN_SUBMIT';
export const LOGIN_FAILED					= 'LOGIN_FAILED';

//Register.js states
export const REGISTER_EMAIL 				= 'REGISTER_EMAIL';
export const REGISTER_PASSWORD 				= 'REGISTER_PASSWORD';
export const REGISTER_NAME 					= 'REGISTER_NAME';
export const REGISTER_EMPLOYEE_ID 			= 'REGISTER_EMPLOYEE_ID';
export const ON_REGISTER_SUBMIT 			= 'ON_REGISTER_SUBMIT';
export const REGISTER_FAILED				= 'REGISTER_FAILED';

//Home.js states
export const USER_NAME 						= 'USER_NAME';
export const USER_ID 						= 'USER_ID';
export const USER_EMAIL 					= 'USER_EMAIL';
export const USER_POSITION					= 'USER_POSITION';
export const HOME_DISPLAY 					= 'HOME_DISPLAY';
export const ADMIN_ROUTE 					= 'ADMIN_ROUTE';
export const STATS 							= 'STATS';
export const TEAM 							= 'TEAM';

//Evaluate.js states
export const EVALUATE_TEAMMATE 				= 'EVALUATE_TEAMMATE';
export const EVALUATE_ROUTE 				= 'EVALUATE_ROUTE';
export const EVALUATE_QUESTIONAIRE 			= 'EVALUATE_QUESTIONAIRE';

//EvaluatePerson.js states
export const SCORE 							= 'SCORE';
export const EVALUATE_P_SUCCESS				= 'EVALUATE_P_SUCCESS';
export const EVALUATE_P_IS_PENDING			= 'EVALUATE_P_IS_PENDING';
export const EVALUATE_P_ERROR				= 'EVALUATE_P_ERROR';

//AdminPanel.js states
export const EMPLOYEE 						= 'EMPLOYEE';

//EmployeeStatus states
export const VISIBILITY1 					= 'VISIBILITY1';
export const VISIBILITY2 					= 'VISIBILITY2';
export const VISIBILITY3 					= 'VISIBILITY3';
export const POSITION 						= 'POSITION';
export const SUBMITVALUE 					= 'SUBMITVALUE';
export const SUBMIT_PROMOTE_EMPLOYEE 		= 'SUBMIT_PROMOTE_EMPLOYEE';
export const SUBMIT_DELETE_EMPLOYEE			= 'SUBMIT_DELETE_EMPLOYEE';
export const EMPLOYEE_STATUS_RESET			= 'EMPLOYEE_STATUS_RESET';

//NewHire.js state
export const EMPLOYEE_ID 					= 'EMPLOYEE_ID';
export const CONFIRM_VISIBILITY 			= 'CONFIRM_VISIBILITY';
export const SUBMITNEWHIRE 					= 'SUBMITNEWHIRE';
export const NEWHIRE_RESET 					= 'NEWHIRE_RESET';

//News.js state
export const NEWS 							= 'NEWS';
export const NEWS_VISIBILITY 				= 'NEWS_VISIBILITY';
export const SUBMITNEWS 					= 'SUBMITNEWS';
export const NEWS_FRONT_PAGE				= 'NEWS_FRONT_PAGE';

//Schedule.js state
export const START_DATE 					= 'START_DATE';
export const END_DATE 						= 'END_DATE';
export const OPEN_START 					= 'OPEN_START';
export const OPEN_END 						= 'OPEN_END';
export const SUBMIT_SCHEDULE 				= 'SUBMIT_SCHEDULE';

//for thunks
export const SIGNIN_IS_PENDING 				= 'SIGNIN_IS_PENDING';
export const SIGNIN_ERROR					= 'SIGNIN_ERROR';
export const REGISTER_IS_PENDING			= 'REGISTER_IS_PENDING';
export const REGISTER_ERROR					= 'REGISTER_ERROR';
export const TEAM_IS_PENDING				= 'TEAM_IS_PENDING';
export const TEAM_ERROR						= 'TEAM_ERROR';
export const STATS_IS_PENDING				= 'STATS_IS_PENDING';
export const STATS_ERROR					= 'STATS_ERROR';
export const SUBMITNEWS_IS_PENDING			= 'SUBMITNEWS_IS_PENDING';
export const SUBMITNEWS_ERROR				= 'SUBMITNEWS_ERROR';
export const NEWSRESET						= 'NEWSRESET';
export const GETNEWS_IS_PENDING				= 'GETNEWS_IS_PENDING';
export const GETNEWS_ERROR					= 'GETNEWS_ERROR';
export const SUBMITNEWS_SUCCES				= 'SUBMITNEWS_SUCCES';
export const SUBMITSCHEDULE_SUCESS 			= 'SUBMITSCHEDULE_SUCESS';
export const SUBMITSCHEDULE_IS_PENDING		= 'SUBMITSCHEDULE_IS_PENDING';
export const SUBMITSCHEDULE_ERROR 			= 'SUBMITSCHEDULE_ERROR';
export const SUBMITSCHEDULE_RESET 			= 'SUBMITSCHEDULE_RESET';
export const EVALUATE_IS_PENDING			= 'EVALUATE_IS_PENDING';
export const EVALUATE_ERROR					= 'EVALUATE_ERROR';
export const NEWS_HOME						= 'NEWS_HOME';
export const NEWS_IS_PENDING				= 'NEWS_IS_PENDING';
export const NEWS_ERROR						= 'NEWS_ERROR';
export const PROMOTE_IS_PENDING				= 'PROMOTE_IS_PENDING';
export const PROMOTE_ERROR					= 'PROMOTE_ERROR';
export const DELETE_IS_PENDING				= 'DELETE_IS_PENDING';
export const DELETE_ERROR					= 'DELETE_ERROR';
export const NEWHIRE_SUCCESS				= 'NEWHIRE_SUCCESS';
export const NEWHIRE_IS_PENDING				= 'NEWHIRE_IS_PENDING';
export const NEWHIRE_ERROR					= 'NEWHIRE_ERROR';
export const EMP_LIST_SUCCESS				= 'EMP_LIST_SUCCESS';
export const EMP_LIST_IS_PENDING 			= 'EMP_LIST_IS_PENDING';
export const EMP_LIST_ERROR 				= 'EMP_LIST_ERROR';
export const EVALUATE_P_RESET				= 'EVALUATE_P_RESET';


