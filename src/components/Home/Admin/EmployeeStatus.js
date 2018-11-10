import React from 'react';
import { connect } from 'react-redux';
import Card from '../../utilities/Card.js'
import Modal from 'react-awesome-modal';
import ButtonMaker from '../../utilities/ButtonMaker.js'
import PositionLegend from '../../utilities/PositionLegend.js'
import EmployeeDescript from '../../utilities/EmployeeDescript.js'
import Headline from '../../utilities/Headline.js'


import { 
	setVisibility1,
	setVisibility2,
	setVisibility3,
	setPosixon,
	setSubValue,
	submitEmployeeUpdateToServer
} from '../../../redux/actions.js';

const mapStateToProps = state => {
	return {
		visibility1: state.setEmployeeStatusState.visibility1,
		visibility2: state.setEmployeeStatusState.visibility2,
		visibility3: state.setEmployeeStatusState.visibility3,
		position: state.setEmployeeStatusState.position,
		submitValue: state.setEmployeeStatusState.submitValue
	};
};

const mapDispatchToProps = dispatch => {
	return {
		toggleModal1: vis => dispatch(setVisibility1(!vis)),
		toggleModal2: vis => dispatch(setVisibility2(!vis)),
		toggleModal3: vis => dispatch(setVisibility3(!vis)),
		setPosition: value => dispatch(setPosixon(value)),
		setSubmitValue: value => dispatch(setSubValue(value)),
		submitToServer: value => dispatch(submitEmployeeUpdateToServer(value)) 
	};
};

const positionList = ['SD', 'TL', 'SM', 'IA', 'UX', 'UI', 'QA', 'BE', 'PM', 'JD'];

class EmployeeStatus extends React.Component {

	
	render() {
		const { 
			employeeStatus, 
			visibility1, 
			visibility2, 
			visibility3, 
			position, 
			submitValue,
			toggleModal1,
			toggleModal2,
			toggleModal3,
			setPosition,
			setSubmitValue 
		} = this.props
		

		return (
			<div className='dib w-80 center'>
				<Modal
					visible={visibility1}
					effect={'fadeInUp'}
					width={'80%'}
					
					onClickAway={() => toggleModal1()}
				>
					<h1>CHANGE EMPLOYEE ROLE</h1>
					<PositionLegend />
					<div className='center flex-wrap f4 pa4 justify-between'>

						{	//creating buttons for position list
							positionList.map( (position, i) => {
								return (
									<ButtonMaker 
										key={i} 
										text={position} 
										className='b link f6 f4-ns bg-orange hover-bg-red pa3'
										onClick={
											() => {
								      		if (position === employeeStatus.position) {
								      			setPosition('');
								      			setSubmitValue({});
								      			toggleModal1(visibility1);
								      		} else {
								      			setPosition(position);
								      			setSubmitValue({id: employeeStatus.employee_id, position: position, flag: 'pos'});
								      			toggleModal1(visibility1);
								      		}
										}}
									/>);
							})
						}
					</div>
					<div>
				      	<ButtonMaker //cancel button within promote modal
				      		text='CANCEL' 
				      		onClick={() => toggleModal1(visibility1)} 
				      		className='w-25 link f6 f4-ns bg-orange hover-bg-red pa3' 
				      	/>
					</div>
				</Modal>

				<Headline text='Managing Employee Status' />
				
				<div>

					<Card
					width={'300px'}
						name={employeeStatus.name} 
						jsx={
							<div>
								<EmployeeDescript 
									name={employeeStatus.name} 
									empId={employeeStatus.employee_id} 
									position={employeeStatus.position} 
									statePosition={position} 
								/>
								<Modal
									visible={visibility2}
									effect={'fadeInUp'}
									width={'80%'}
								>
									<h1 className='red f4 f3-ns'>REMOVING EMPLOYEE</h1>
									
							      	<ButtonMaker 
							      		text='CONFIRM'
							      		className='link f6 f4-ns bg-orange hover-bg-red pa3 w-50' 
							      		onClick={() => {
								      		setSubmitValue({id: employeeStatus.employee_id, flag:'del'});
								      		toggleModal2(visibility2);
								      		toggleModal3(visibility3);
								      	}}  
							      	/>
							      	<ButtonMaker 
							      		text='CANCEL'
							      		className='link f6 f4-ns bg-orange hover-bg-red pa3 w-50' 
							      		onClick={() => {
								      		toggleModal2(visibility2);
								      		setSubmitValue({});
								      	}}  
							      	/>
								</Modal>
								<Modal
									visible={visibility3}
									effect={'fadeInUp'}
									width={'80%'}
								>
									<h1 className='red f6 f4-ns'>CLICK SUBMIT</h1>
								</Modal>	
							</div>
						} 
					/>
				</div>
				
				<div className='flex flex-wrap pa3 ma3 br4 center' >
			      	<ButtonMaker 
			      		text='PROMOTE' 
			      		onClick={() => toggleModal1(visibility1)} 
			      		className='f4 f3-ns grow pv3 ph5 bg-orange' 
			      	/>
			      	<ButtonMaker 
			      		text={visibility3 || visibility2 ? 'CANCEL': 'DELETE'} 
			      		onClick={() => {
			      			//need to pass this logic else when clicking CANCEL modal2 will show up
			      			toggleModal2((!visibility2 && !visibility3) ? visibility2: true);
			      			//this will always close modal3
			      			toggleModal3(true); 
			      		}} 
			      		className='f4 f3-ns grow pv3 ph5 bg-orange' 
			      	/>
			      	<ButtonMaker 
			      		text='SUBMIT' 
			      		onClick={() => {
			      			//submitToServer()
			      			console.log(submitValue, visibility3);
			      		}} 
			      		className='f4 f3-ns grow pv3 ph5 bg-red' 
			      	/>
				</div>
			</div>

		);
	}
}





export default connect(mapStateToProps, mapDispatchToProps)(EmployeeStatus);


