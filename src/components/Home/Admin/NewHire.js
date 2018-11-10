import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';
import Headline from '../../utilities/Headline.js'
import ButtonMaker from '../../utilities/ButtonMaker.js'

import { 
	setEmployID,
	setConfirmVis,
	submitNewHire
} from '../../../redux/actions.js';

const mapStateToProps = state => {
	return {
		employee_id: state.setNewHireState.employee_id,
		confirmVisibility: state.setNewHireState.confirmVisibility,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		setEmpId: value => dispatch(setEmployID(value)),
		toggleConfirmVisibility: value => dispatch(setConfirmVis(!value)),
		onSubmit: value => dispatch(submitNewHire(value))
	};
}

class NewHire extends React.Component {

	render() {
		const { employee_id, confirmVisibility, setEmpId, toggleConfirmVisibility } = this.props;

		return (
			<div className='w-80'>
				<Modal
					visible={confirmVisibility}
					effect={'fadeInUp'}
					width={'80%'}
				>
					<h2>---CONFIRM DATABASE UDATE---</h2>
					<h1 className='w-80 center'><span className='red'>INSERTING: </span>{employee_id}</h1>
					<div className='flex flex-wrap center'>
						
				      	<ButtonMaker 
				      		text='CONFIRM' 
				      		onClick={() => {
					      		toggleConfirmVisibility(confirmVisibility);
					      		console.log(employee_id);
					      	}} 
					      	className='b f6 f4-ns pa3 bg-orange hover-bg-red link' 
					    />
				      	
				      	<ButtonMaker 
				      		text='CANCEL' 
				      		onClick={() => { 
					      		toggleConfirmVisibility(confirmVisibility);
					      		setEmpId('');
					      	}} 
					      	className='b f6 f4-ns pa3 bg-orange hover-bg-red link' 
					    />
					</div>
				</Modal>
				<Headline text='Set Employee ID of New Hire' />
				<div className='db pa2 shadow-5  ma5 br4 bg-green center'>
					<h1>Adding ID to Database </h1>
					<input 
						className='f6 f4-ns b pa3 ma3 ba b--green bg-lightest-blue br3'
						type='text'
						placeholder='Enter employee_id'
						value={employee_id}
						onChange={ (event) => setEmpId(event.target.value) }
					/>
					
				</div>
				<ButtonMaker 
		      		text='SUBMIT' 
		      		onClick={() => toggleConfirmVisibility(confirmVisibility)} 
			      	className='f3 f4-ns pv3 ph5 w-50 bg-red w-50' 
			    />
			</div>
		);

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewHire);


