import React from 'react';
import { connect } from 'react-redux';
import Deck from '../../utilities/Deck.js'
import Card from '../../utilities/Card.js'
import EvaluatePerson from './EvaluatePerson';
import Headline from '../../utilities/Headline.js'

import { 
	setEvaluateRoute,
	setEvaluateTeammate
} from '../../../redux/actions.js';

const mapStateToProps = state => {

	return {
		team: state.setHomeState.team,
		evaluateRoute: state.setEvaluateState.evaluateRoute,
		errorTeam: state.setHomeState.teamError
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
			team,
			errorTeam, 
			setEvalTeammate, 
			setEvalRoute 
		} = this.props;

		let disp;

		switch(evaluateRoute) {
			case 'evaluate':
				disp = (
					<div className='dib w-80'>
						{ errorTeam ?
						(
							<div>
								<Headline text='No Teammate!' />
								<Card jsx={<h1 className='f4 f3-ns mv6 near-black'>{errorTeam.toString().replace('Error: ', '')}</h1>} />
							</div>
						) 
						:
						(
							<div>
								<Headline text='Evaluate your team!' />
								<div>
									<Deck 
										employee={team} 
										setEvaluateTeamMate={setEvalTeammate}
										setEvalRoute={setEvalRoute}
										flag={'evaluation'}
									/>
								</div>
							</div>
						)
						}
					</div>
				);
				break;
			case 'evaluatePerson':
				disp = <EvaluatePerson />;
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















