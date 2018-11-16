import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';
import Card from '../../utilities/Card.js'
import SliderWithTooltip from '../../utilities/SliderWithTooltip.js'
import ButtonMaker from '../../utilities/ButtonMaker.js'

import { 
	toggleScore,
	onSubmitEvalPerson,
	evaluatePReset,
	togglePSuccess,
	setEvaluateRoute,
	fetchTeam
} from '../../../redux/actions.js';

const mapStateToProps = state => {
	return {
		score: state.setEvaluatePersonState.score,
		evaluateTeamMate: state.setEvaluateState.evaluateTeamMate,
		questionaire: state.setEvaluateState.questionaire,
		user_id: state.setHomeState.user_id,
		evaluatePPending: state.setEvaluatePersonState.evaluatePIsPending,
		evaluatePError: state.setEvaluatePersonState.evaluatePError,
		evaluatePSuccess: state.setEvaluatePersonState.evaluatePSuccess
	};
};

const mapDispatchToProps = dispatch => {
	return {
		togScore: score => dispatch(toggleScore(score)),
		togPSuccess: bool => dispatch(togglePSuccess(!bool)),
		submitEvalPerson: value => dispatch(onSubmitEvalPerson(value)),
		evalPReset: () => dispatch(evaluatePReset()),
		changeRoute: route => dispatch(setEvaluateRoute(route)),
		fetchTeammates: id => dispatch(fetchTeam(id))
	};
};

class EvaluatePerson extends React.Component {
	componentDidMount() {
		this.props.evalPReset();
	}

	render() {
		const { 
			evaluateTeamMate, 
			questionaire, 
			score, 
			togScore, 
			user_id,
			submitEvalPerson,
			evaluatePPending,
			evaluatePError,
			evaluatePSuccess,
			togPSuccess,
			changeRoute,
			fetchTeammates
		} = this.props;
		return (
			<div className='dib'>
				<Modal //this modal will always show while fetching to server
		          visible={ evaluatePPending || !!evaluatePError || evaluatePSuccess }
		          effect={'fadeInUp'}
		          width={'50%'}
		        >
		        {
			        evaluatePSuccess ?
		        	(
		        		<div>
				        	<h1 className='red f4 f3-ns'>TEAMMATE EVALUATION SUCCESS</h1>
				        	<ButtonMaker 
								text='BACK TO TEAM' 
								onClick={() => {
									fetchTeammates(user_id);
									togPSuccess(evaluatePSuccess);
									changeRoute('evaluate');
								}} 
								className='f6 f5-ns w-50 bg-orange pa3' 
							/>
						</div>	
		        	)
		        	:
		          	(
			          	<h1 className='red f4 f3-ns'>{
				          	!!evaluatePError ? 'ERROR EVALUATING TEAMMATE' : 'SENDING EVALUATION...'
				        }</h1>
			        )    
		        }
		        </Modal>
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
			      	<ButtonMaker 
			      		text='SUBMIT' 
			      		onClick={() => {
			      			const value = {evaluator: user_id, evaluated: evaluateTeamMate.employee_id, score: score};
			      			submitEvalPerson(value)
			      			console.log(value);
			      		}} 
			      		className='f3 f4-ns w-50 bg-orange pv3 ph5' 
			      	/>
				</div>
			</div>

		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EvaluatePerson);