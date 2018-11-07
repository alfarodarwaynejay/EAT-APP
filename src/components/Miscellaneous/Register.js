import React from 'react';
import Tilt from 'react-tilt';
import { connect } from 'react-redux';
import { 
	setRoute, onSubmitRegister,
	setRegisterEmail, 
	setRegisterPassword, 
	setRegisterName,
	setRegisterEmployeeId 
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
		onSubmitRegister: route => dispatch(setRoute(route))
	}
}

class Register extends React.Component {

	render() {

		const { onNameChange, onPasswordChange, onEmailChange, onEmployeeIdChange, onSubmitRegister } = this.props;

		return (
			<article className="br4 center ma5">
				<Tilt className='Tilt br4 shadow-1' options={{ max : 15 }} style={{background: 'none'}}>
					<main className="pa4 black-80 Tilt-inner">
					  <div className="measure">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f2 fw6 ph0 mh0">Register</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
					        <input 
					        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="text" 
					        	name="name"  
					        	id="name" 
					        	onChange={onNameChange}/>
					      </div>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="name">Employee ID</label>
					        <input 
					        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="text" 
					        	name="name"  
					        	id="name" 
					        	onChange={onEmployeeIdChange}/>
					      </div>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input 
					        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="email" 
					        	name="email-address" 
					        	id="email-address" 
					        	onChange={onEmailChange}/>
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input 
					        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="password" 
					        	name="password"  
					        	id="password" 
					        	onChange={onPasswordChange}/>
					      </div>
					    </fieldset>
					    <div className="">
					      <input 
					      	className="b pa3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					      	type="button" 
					      	value="Register" 
					      	onClick={() => onSubmitRegister ('signin')}
					      />
					    </div>
					  </div>
					</main>
				</Tilt>
			</article>
		);
	}

	
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);