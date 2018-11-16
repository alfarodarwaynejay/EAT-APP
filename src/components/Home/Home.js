import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';
import DefaultHome from './DefaultHome.js';
import Evaluate from './Evaluate/Evaluate.js';
import Statistics from './Statistics/Statistics.js'
import AdminPanel from './Admin/AdminPanel.js';
import Navigation from './Navigation.js';
import Headline from '../utilities/Headline.js';
import ButtonMaker from '../utilities/ButtonMaker.js';

import { 
	setRoute,
	setHomeDisplay,
	setAdminRoute, 
	setStats,
	setTeam,
	setEvaluateRoute,
	onHomeMount
} from '../../redux/actions.js';

const mapStateToProps = state => {
	return {
		homeDisplay: state.setHomeState.homeDisplay,
		adminRoute: state.setHomeState.adminRoute,
		stats: state.setHomeState.stats,
		newsHome: state.setHomeState.newsHome,
		team: state.setHomeState.team,
		isGod: state.setAppState.isGod,
		evaluate: state.setAppState.evaluate,
		userName: state.setHomeState.user_name,
		userID: state.setHomeState.user_id,
		position: state.setHomeState.user_position,
		teamPending: state.setHomeState.teamIsPending,
		statsPending: state.setHomeState.statsIsPending,
		errorStats: state.setHomeState.statsError,
		promotePending: state.setEmployeeStatusState.promoteIsPending,
		newhirePending: state.setEmployeeStatusState.newhireIsPending,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setHomeDisplay: route => dispatch(setHomeDisplay(route)),
		setAdminRoute: 	route => dispatch(setAdminRoute(route)),
		onRouteChange: 	route => dispatch(setRoute(route)),
		setEvalRoute: 	route => dispatch(setEvaluateRoute(route)),
		mountHome: data => dispatch(onHomeMount(data))
	};
};


class Home extends React.Component {

	componentDidMount() {
		const { mountHome, userID } = this.props
		//load stats and team here
		mountHome(userID);
	}


	//do render logic here
	displayer = () => {
		const { 
			evaluate, 
			homeDisplay, 
			stats, 
			team,
			newsHome, 
			adminRoute,
			userName,
			userID,
			position,
			onRouteChange,
			setHomeDisplay,
			setAdminRoute,
			errorStats,
			isGod
		} = this.props;
		let disp;

		switch(homeDisplay) {
			case 'defaultHome':
				disp = isGod ? <AdminWelcomePage /> : <DefaultHome evaluate={evaluate} setHomeDisplay={setHomeDisplay} newsList={newsHome}/>;
				break;
			case 'statistics':
				disp = <Statistics name={userName} id={userID} position={position} stats={stats} error={errorStats} />;
				break;
			case 'evaluateDefault':
				disp = <Evaluate />;
				break;
			case 'profile':
				disp = (<h1 className='f1'>Nothing Yet!</h1>);
				break;
			case 'god':
				disp = <AdminPanel team={team} adminRoute={adminRoute} setAdminRoute={setAdminRoute} setHomeDisplay={setHomeDisplay} />;
				break;
			default:
				disp = (<h1 className='f1'>SOMETHING WENT WRONG. SORRY.</h1>);

		}

		return disp;
	}

	render() {
		const { 
			isGod, 
			adminRoute,
			onRouteChange, 
			setHomeDisplay, 
			setAdminRoute, 
			setEvalRoute, 
			userName,
			teamPending,
			statsPending,
			promotePending,
			newhirePending,
		} = this.props;

		return (
			<div>
				<div>
					<div className='center' >
					<Modal //this modal will always show while fetching to server
			          visible={ statsPending || promotePending || newhirePending }
			          effect={'fadeInUp'}
			          width={'50%'}
			        >
			          <h1 className='red f4 f3-ns'>{
			          	adminRoute === 'adminHome' ? 'LOADING RESOURCES...' : 'UPDATING SERVER...'
			          }</h1>
			        </Modal>
			        </div>
					<Navigation 
	                  onRouteChange={onRouteChange} 
	                  setHomeDisplay={setHomeDisplay}
	                  god={isGod}
	                  setAdminRoute={setAdminRoute}
	                  setEvalRoute={setEvalRoute}
	                  userName={userName}
	                />
					<div 
						className='db br4 shadow-5 mb7 pt5 pb5 pr2 pl2 center w-80 flex bg-washed-blue flex-wrap'
						style={{background:'rgba(228, 241, 254, 0.7)'}}
					>
						    	
					    {
					    	this.displayer()
					    }
										   			 
					</div>
				</div>
			</div>
		);
	}
	
}

const AdminWelcomePage = () => {
	return (
		<div className='w-80'>
			<Headline text='YOU ARE ADMIN' />
			<h1 className='center f5 f4-ns w-90'>You have lots of work. Please take some break.</h1>
	      	<div className='center flex-wrap'> 
	      		<ButtonMaker 
					style={{width: '600px'}}
					text='9gag' 
					onClick={() => window.open('https://www.9gag.com/', '_blank')} 
					className='f4 f3-ns w-50 bg-orange pa3 w-50' 
				/>
				<ButtonMaker 
					style={{width: '600px'}}
					text='youtube' 
					onClick={() => window.open('https://www.youtube.com', '_blank')} 
					className='f4 f3-ns w-50 bg-orange pa3 w-50' 
				/>	
	      	</div>
      	</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);












