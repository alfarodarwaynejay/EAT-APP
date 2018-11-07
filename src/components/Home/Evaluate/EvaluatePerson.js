import React from 'react';
import { connect } from 'react-redux';
import Card from '../Cards/Card.js'
import SliderWithTooltip from './SliderWithTooltip.js'

import { 
	toggleScore
} from '../../../redux/actions.js';

const mapStateToProps = state => {
	return {
		score: state.setEvaluatePersonState.score,
		evaluateTeamMate: state.setEvaluateState.evaluateTeamMate,
		questionaire: state.setEvaluateState.questionaire
	};
};

const mapDispatchToProps = dispatch => {
	return {
		togScore: score => dispatch(toggleScore(score))
	};
};

class EvaluatePerson extends React.Component {
	render() {
		const { evaluateTeamMate, questionaire, score, togScore } = this.props;
		return (
			<div className='dib'>
				<div 
					className='center pa2 bg-washed-blue br4 mt0 mb4 shadow-5  w-80' 
					style={{background:'rgb(228, 241, 254)'}}
				>
					<h1 className='f4-l f4m f4-ns'>Evaluating Teammate</h1>
				</div>
				<div>
					<Card
						name={evaluateTeamMate.name} 
						jsx={
							<div>
								<h2 className='black f4-l f4-m f4-ns'>Name: {evaluateTeamMate.name}</h2>
								<h2 className='black f4-l f4-m f4-ns'>Employee ID: {evaluateTeamMate.employee_id}</h2>
								<h2 className='black f4-l f4-m f4-ns'>Position: {evaluateTeamMate.position}</h2>	
							</div>
						} 
					/>
				</div>
				{

					questionaire.map((question, i) => {
						return (
							<div 
								key={i}
								className='db pa2 shadow-5 w-80 ma3 br4 bg-green center'
							>
								<h2 className='f3-l f3-m f3-ns mb2'>{question}</h2>
								<div className='w-80 center ma4'>
								<SliderWithTooltip onChange={(value) => togScore({ [i] : value})}/>	
							    </div>
							</div>	
						);
					})
					
				}
				<div className='pa3 ma3 br4 center'>
					<h1 
					className='f4 grow pv3 ph5 mt2 mb2 ma4 bg-orange br-pill grow shadow-5 pointer' 
			      	onClick={() => console.log({[evaluateTeamMate.employee_id]: score})}
			      	>
			      	SUBMIT
			      	</h1>
				</div>
			</div>

		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EvaluatePerson);