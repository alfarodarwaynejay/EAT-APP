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
	submitPromoteEmployee,
	submitDeleteEmployee,
	setAdminRoute,
	setHomeDisplay,
	setEmployeeStatusReset
} from '../../../redux/actions.js';

const mapStateToProps = state => {
	return {
		visibility1: state.setEmployeeStatusState.visibility1,
		visibility2: state.setEmployeeStatusState.visibility2,
		visibility3: state.setEmployeeStatusState.visibility3,
		position: state.setEmployeeStatusState.position,
		submitValue: state.setEmployeeStatusState.submitValue,
		user_id: state.setHomeState.user_id,
		promoteSuccess: state.setEmployeeStatusState.promoteSuccess,
		errorPromote: state.setEmployeeStatusState.promoteError,
		deleteSuccess: state.setEmployeeStatusState.deleteSuccess,
		deleteError: state.setEmployeeStatusState.deleteError,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		toggleModal1: vis => dispatch(setVisibility1(!vis)),
		toggleModal2: vis => dispatch(setVisibility2(!vis)),
		toggleModal3: vis => dispatch(setVisibility3(!vis)),
		setPosition: value => dispatch(setPosixon(value)),
		setSubmitValue: value => dispatch(setSubValue(value)),
		goHome: route => dispatch(setHomeDisplay(route)),
		goAdmin: route => dispatch(setAdminRoute(route)),
		resetEmployeeStatusState: () => dispatch(setEmployeeStatusReset()),
		submitToServer: value => {
			let { flag, ...forServer } = value;
			if (value.flag === 'pos') {
				dispatch(submitPromoteEmployee(forServer));
			} else {
				dispatch(submitDeleteEmployee(forServer));
			}	
		} 
	};
};

const positionList = ['SD', 'TL', 'SM', 'IA', 'UX', 'UI', 'QA', 'BE', 'PM', 'JD'];

class EmployeeStatus extends React.Component {
	componentDidMount() {
		this.props.resetEmployeeStatusState();
	}
	
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
			setSubmitValue,
			user_id,
			submitToServer,
			promoteSuccess,
			errorPromote,
			deleteSuccess,
			deleteError,
			goHome,
			goAdmin 
		} = this.props
		
		return (
			<div className='dib w-80 center'>
				<Modal //show after server responded
			      visible={!!errorPromote || !!deleteError || promoteSuccess || deleteSuccess }
			      effect={'fadeInUp'}
			      width={'50%'}
			    >
			      <h1 className='red f4 f3-ns'>
			      	{
			      		(!!errorPromote || !!deleteError || !!newhireError ?
			      		'SOMETHING WENT WRONG WHILE UPDATING SERVER'
			      		: 'SERVER UPDATE SUCCESSFUL')
			      	}
			      </h1>
			      
			          <ButtonMaker 
			            text='HOME'
			            className='link f6 f4-ns bg-orange hover-bg-red pa3 w-50' 
			            onClick={() => goHome('defaultHome')} 
			          />
			          <ButtonMaker 
			            text='ADMIN'
			            className='link f6 f4-ns bg-orange hover-bg-red pa3 w-50' 
			            onClick={() => goAdmin('adminHome')} 
			          />
			    </Modal>
			    <Modal//modals for server update operations
					visible={visibility1}
					effect={'fadeInUp'}
					width={'80%'}
					
					onClickAway={() => toggleModal1()}
				>
					<h1>CHANGE EMPLOYEE ROLE</h1>
					<h1>NEW POSITION: <span className='red'>{ position }</span></h1>
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
								      			// toggleModal1(visibility1);
								      		} else {
								      			setPosition(position);
								      			setSubmitValue({
								      				god_id: user_id, 
								      				id: employeeStatus.employee_id, 
								      				position: position, flag: 'pos'
								      			});
								      			// toggleModal1(visibility1);
								      		}
										}}
									/>);
							})
						}
					</div>
					<div className='flex flex-wrap pa3 ma3 br4 center dib'>
				      	<ButtonMaker //cancel button within promote modal
				      		text='CANCEL' 
				      		style={{width: '250px'}}
				      		onClick={() => toggleModal1(visibility1)} 
				      		className='link f4 f3-ns bg-orange hover-bg-red pa3 w-50' 
				      	/>
				      	<ButtonMaker 
				      		text='SUBMIT' 
				      		style={{width: '250px'}}
				      		onClick={() => {
				      			
				      			if(!position) {
				      				//this is necessary otherwise server update will fail
				      				alert('Cannot do that'); //temporary sa ni xa....unaha sa tong add new hire nga end-point
				      			} else {
				      				submitToServer(submitValue);
				      				toggleModal1(visibility1);
				      				//console.log(submitValue)
				      			}
				      		}} 
				      		className='link f4 f3-ns pa3 bg-orange hover-bg-red w-50'
				      	/>
					</div>
				</Modal>

				<Headline text='Managing Employee Status' />
				<div>
					<Card
						width={'300px'}
						name={employeeStatus.name} 
						jsx={ 
							<EmployeeDescript 
								name={employeeStatus.name} 
								empId={employeeStatus.employee_id} 
								position={employeeStatus.position} 
								statePosition={position} 
							>	

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
									      		setSubmitValue({
									      			god_id: user_id, 
									      			id: employeeStatus.employee_id, 
									      			flag:'del'
									      		});
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
										width={'50%'}
										onClickAway={() => toggleModal3(visibility3)}
									>
									
										<h1 className='red f6 f4-ns'>CLICK SUBMIT</h1>
										<ButtonMaker 
								      		text='SUBMIT' 
								      		onClick={() => {
								      			toggleModal3(visibility3);
								      			submitToServer(submitValue);
								      			//console.log(Object.keys(submitValue).length)
								      		}} 
								      		className='f4 f3-ns grow pv3 ph5 bg-red w-50'
								      	/>
								    
									</Modal>
								
							</EmployeeDescript>
						} 
					/>
				</div>
				<div className='flex flex-wrap pa3 ma3 br4 center dib justify-between w-70' >
			      	<ButtonMaker 
			      		text='PROMOTE'
			      		style={{width: '250px'}}

			      		onClick={() => toggleModal1(visibility1)} 
			      		className='f4 f3-ns grow pv3 bg-orange' 
			      	/>
			      	<ButtonMaker 
			      		text={visibility3 || visibility2 ? 'CANCEL': 'DELETE'}
			      		style={{width: '250px'}} 

			      		onClick={() => {
			      			//need to pass this logic else when clicking CANCEL modal2 will show up
			      			toggleModal2((!visibility2 && !visibility3) ? visibility2: true);
			      			//this will always close modal3
			      			toggleModal3(true);
			      			//will clear submitValue data when canceled
			      			setSubmitValue({});
			      		}} 
			      		className='f4 f3-ns grow pv3 bg-orange' 
			      	/>
				</div>
			</div>
		);
	}
}





export default connect(mapStateToProps, mapDispatchToProps)(EmployeeStatus);


