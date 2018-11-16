import React from 'react';
import { Fieldset, InputLabel, InputButton, Forms } from '../utilities/Forms.js';
import { connect } from 'react-redux';

import { 
	onSubmitRegister,
	setRegisterEmail, 
	setRegisterPassword, 
	setRegisterName,
	setRegisterEmployeeId,
	setRoute 
} from '../../redux/actions.js';

const mapStateToProps = state => {
	return {
		email: state.setRegisterState.email,
		password: state.setRegisterState.password,
		name: state.setRegisterState.name,
		id: state.setRegisterState.id,
		route: state.setAppState.route,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onEmailChange: event => dispatch(setRegisterEmail(event.target.value)),
		onPasswordChange: event => dispatch(setRegisterPassword(event.target.value)),
		onNameChange: event => dispatch(setRegisterName(event.target.value)),
		onEmployeeIdChange: event => dispatch(setRegisterEmployeeId(event.target.value)),
		onRegisterSubmit: data => dispatch(onSubmitRegister(data)),
		setRoute: route => dispatch(setRoute(route))
	}
}

class Register extends React.Component {

	render() {

		const {
			name,
			id,
			email,
			password,
			onNameChange, 
			onPasswordChange, 
			onEmailChange, 
			onEmployeeIdChange, 
			onRegisterSubmit,
			setRoute 
		} = this.props;

		return (
			<Forms>
			    <Fieldset id="sign_up" legend='Register'>
			      <InputLabel key='name' label='Name' type='text' name='name'func={onNameChange} />
			      <InputLabel key='emp-id' label='Employee ID' type='text' name='emp-id' func={onEmployeeIdChange} />
			      <InputLabel key='email' label='Email' type='email' name='email-address'func={onEmailChange} />
			      <InputLabel key='password' label='Password' type='password' name='password'func={onPasswordChange} />
			    </Fieldset>
			    <InputButton 
			    	value='Register' 
			    	onClick={() => {
				    	onRegisterSubmit ({name, email, password, id});
				    }} 
				/>
				<div className="lh-copy mt3">
			      <a href="#0" className="f6 link dim b black grow db"
			      	onClick={()=> setRoute('signin')}>{'<<'} Back to Sign In</a>
			    </div>
			</Forms>
		);
	}

	
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);