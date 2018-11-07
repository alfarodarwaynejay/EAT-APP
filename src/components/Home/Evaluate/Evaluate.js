import React from 'react';
import { connect } from 'react-redux';
import Deck from '../Cards/Deck.js'
import EvaluatePerson from './EvaluatePerson';

import { 
	setEvaluateRoute,
	setEvaluateTeammate
} from '../../../redux/actions.js';

const mapStateToProps = state => {

	return {
		team: state.setHomeState.team,
		evaluateRoute: state.setEvaluateState.evaluateRoute,
		evaluateTeamMate: state.setEvaluateState.evaluateTeamMate,
		questionaire: state.setEvaluateState.questionaire
	};
}

const mapDispatchToProps = dispatch => {
	return {
		setEvalRoute: route => dispatch(setEvaluateRoute(route)),
		setEvalTeammate: person => dispatch(setEvaluateTeammate({
			name: person.name,
          	employee_id: person.employee_id,
         	position: person.position
		}))
	}

}



class Evaluate extends React.Component {

	renderEvaluate = () => {
		const {
			evaluateRoute, 
			evaluateTeamMate, 
			questionaire, 
			team, 
			setEvalTeammate, 
			setEvalRoute 
		} = this.props;

		let disp;

		switch(evaluateRoute) {
			case 'evaluate':
				disp = (
					<div className='dib w-80'>
						<div className='pa2 bg-washed-blue br4 mt0 mb4 mr3 ml3 shadow-5'>
							<h1 className='f4-l f4-m f4-ns'>Evaluate your team!</h1>
						</div>
						<div>
							<Deck 
								employee={team} 
								setEvaluateTeamMate={setEvalTeammate}
								setEvalRoute={setEvalRoute}
								flag={'evaluation'}
							/>
						</div>
						
					</div>
				);
				break;
			case 'evaluatePerson':
				disp = <EvaluatePerson evaluateTeamMate={evaluateTeamMate} questions={questionaire}/>;
				break;
			default:
				disp = <h1>React Wants a Default Case. Pffff!</h1>
		}

		return disp;
	}

	render() {

		return (
			this.renderEvaluate()	
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Evaluate);















