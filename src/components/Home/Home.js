import React from 'react';
import { connect } from 'react-redux';
import DefaultHome from './DefaultHome.js';
import Evaluate from './Evaluate/Evaluate.js';
import Statistics from './Statistics/Statistics.js'
import AdminPanel from './Admin/AdminPanel.js';
import Navigation from './Navigation.js';

import { 
	setRoute,
	setHomeDisplay,
	setAdminRoute, 
	setStats,
	setTeam,
	setEvaluateRoute
} from '../../redux/actions.js';

const mapStateToProps = state => {
	return {
		homeDisplay: state.setHomeState.homeDisplay,
		adminRoute: state.setHomeState.adminRoute,
		stats: state.setHomeState.stats,
		team: state.setHomeState.team,
		isGod: state.setAppState.isGod,
		evaluate: state.setAppState.evaluate
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setHomeDisplay: route => dispatch(setHomeDisplay(route)),
		setAdminRoute: 	route => dispatch(setAdminRoute(route)),
		onRouteChange: 	route => dispatch(setRoute(route)),
		setEvalRoute: 	route => dispatch(setEvaluateRoute(route))

	};
};


class Home extends React.Component {

	//do render logic here
	displayer = () => {
		const { 
			evaluate, 
			homeDisplay, 
			stats, 
			team, 
			adminRoute,
			onRouteChange,
			setHomeDisplay,
			setAdminRoute 
		} = this.props;
		let disp;

		switch(homeDisplay) {
			case 'defaultHome':
				disp = <DefaultHome evaluate={evaluate} setHomeDisplay={setHomeDisplay}/>;
				break;
			case 'statistics':
				disp = <Statistics stats={stats}/>;
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
		const { isGod, onRouteChange, setHomeDisplay, setAdminRoute, setEvalRoute } = this.props;

		return (
			<div>
				<Navigation 
                  onRouteChange={onRouteChange} 
                  setHomeDisplay={setHomeDisplay}
                  god={isGod}
                  setAdminRoute={setAdminRoute}
                  setEvalRoute={setEvalRoute}
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
		);
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);












