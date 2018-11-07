import React from 'react';
import { connect } from 'react-redux';
import DefaultAdminHome from './DefaultAdminHome.js';
import Employees from './Employees.js';
import EmployeeStatus from './EmployeeStatus.js'
import Schedule from './Schedule.js';
import NewHire from './NewHire.js'
import News from './News.js';

import { 
	setEmployeeStatus, 
	setAdminRoute, 
	setHomeDisplay
} from '../../../redux/actions.js';

const mapStateToProps = state => {
	return {
		employeeStatus: state.setAdminPanelState.employeeStatus,
		team: state.setHomeState.team,
		adminRoute: state.setHomeState.adminRoute,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setEmpStats: person => dispatch(setEmployeeStatus({
			name: person.name,
          	employee_id: person.employee_id,
         	position: person.position
		})),
		setHomeDisp: route => dispatch(setHomeDisplay(route)),
		setAdRoute: route => dispatch(setAdminRoute(route))
	};
};

class AdminPanel extends React.Component {

	adminPageRenderer = () => {
		const { team, adminRoute, employeeStatus, setAdRoute, setHomeDisp, setEmpStats } = this.props;
		let disp; 

		switch(adminRoute) {
			case 'adminHome':
				disp = <DefaultAdminHome setAdminRoute={setAdRoute} setHomeDisplay={setHomeDisp}/>;
				break;
			case 'employees':
				disp = <Employees 
							team={team} 
							setAdminRoute={setAdRoute} 
							setEmpStats={setEmpStats}
						/>;
				break;
			case 'employeeStatus':
				disp = <EmployeeStatus employeeStatus={employeeStatus}/>;
				break;
			case 'schedule':
				disp = <Schedule />;
				break;
			case 'newHire':
				disp = <NewHire />
				break;
			case 'news':
				disp = <News />;
				break;
			default:
				disp = <h1>Something went wrong! Oh no Aaaaaah!</h1>
		}

		return disp;
	}

	render() {

		return (
			this.adminPageRenderer()
		);
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);

