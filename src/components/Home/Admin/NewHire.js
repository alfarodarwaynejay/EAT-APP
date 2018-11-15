import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';
import Headline from '../../utilities/Headline.js'
import ButtonMaker from '../../utilities/ButtonMaker.js'
import Card from '../../utilities/Card.js'

import { 
	setEmployID,
	setConfirmVis,
	submitNewHire,
	newhireReset,
	setAdminRoute,
	setHomeDisplay,
} from '../../../redux/actions.js';

const mapStateToProps = state => {
	return {
		employee_id: state.setNewHireState.employee_id,
		confirmVisibility: state.setNewHireState.confirmVisibility,
		newhireSuccess: state.setNewHireState.newhireSuccess,
		newhireError: state.setNewHireState.newhireError,
		empList: state.setHomeState.empListSuccess
	};
}

const mapDispatchToProps = dispatch => {
	return {
		setEmpId: value => dispatch(setEmployID(value)),
		toggleConfirmVisibility: value => dispatch(setConfirmVis(!value)),
		onSubmit: value => dispatch(submitNewHire(value)),
		resetNewhireState: () => dispatch(newhireReset()),
		goHome: route => dispatch(setHomeDisplay(route)),
		goAdmin: route => dispatch(setAdminRoute(route)),
	};
}

class NewHire extends React.Component {
	componentDidMount() {
		this.props.resetNewhireState();
	}

	render() {
		const { 
			employee_id, 
			confirmVisibility, 
			setEmpId, 
			toggleConfirmVisibility,
			onSubmit,
			newhireSuccess,
			newhireError,
			empList,
			goAdmin,
			goHome,
			resetNewhireState
		} = this.props;

		return (
			<div className='w-80'>
				<Modal //show after server responded
			      visible={!!newhireError || newhireSuccess }
			      effect={'fadeInUp'}
			      width={'50%'}
			    >
			      <h1 className='red f4 f3-ns'>
			      	{
			      		(!!newhireError ?
			      		'UNABLE TO ADD NEW ID'
			      		: 'SERVER UPDATE SUCCESSFUL')
			      	}
			      </h1>
			      
			          <ButtonMaker 
			            text='HOME'
			            className='link f6 f4-ns bg-orange hover-bg-red pa3 w-50' 
			            onClick={() => {
			            	goHome('defaultHome')
			            }} 
			          />
			          <ButtonMaker 
			            text='ADMIN'
			            className='link f6 f4-ns bg-orange hover-bg-red pa3 w-50' 
			            onClick={() => {
			            	goAdmin('adminHome')
			            }} 
			          />
			          <ButtonMaker 
			            text='CANCEL'
			            className='link f6 f4-ns bg-orange hover-bg-red pa3 w-50' 
			            onClick={() => {
			            	resetNewhireState()
			            }} 
			          />
			    </Modal>
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
					      		onSubmit(employee_id);
					      	}} 
					      	className='b f6 f4-ns pa3 bg-orange hover-bg-red link' 
					      	margin='mv2 mh6'
					    />
				      	
				      	<ButtonMaker 
				      		text='CANCEL' 
				      		onClick={() => { 
					      		toggleConfirmVisibility(confirmVisibility);
					      		setEmpId('');
					      	}} 
					      	className='b f6 f4-ns pa3 bg-orange hover-bg-red link' 
					      	margin='mv2 mh6'
					    />
					</div>
				</Modal>
				<Headline text='Set Employee ID of New Hire' />
				<div className='db pa2 shadow-5  ma5 br4 bg-green center'>
					<h1>Adding ID to Database </h1>
					<input 
						className='w-80 f6 f4-ns b pa3 ma3 ba b--green bg-lightest-blue br3'
						type='text'
						placeholder='employee_id'
						value={employee_id}
						onChange={ (event) => setEmpId(event.target.value) }
					/>
					
				</div>
				<ButtonMaker 
		      		text='SUBMIT' 
		      		onClick={() => toggleConfirmVisibility(confirmVisibility)} 
			      	className='f3 f4-ns pv3 ph5 w-50 bg-red w-50' 
			    />
			    <div className='w-50 center'>
			   	{ (!!empList.length &&
	     	 		<Card 
		      		news
		      		jsx={
		      			<div>
		      				<h2 className='center'>Employee numbers:</h2>
		      				{empList.map((item, i) => { 
		      					return (<h3 key={i} className='tl'>
				      						{(i+1).toString().padStart(4,'\xa0')}.) {item.employee_id}
				      					</h3>)	
		      				})}		
		      			</div>	
		      		} 
		      	/>)
	      		}
	      		</div>
			</div>
		);

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewHire);


