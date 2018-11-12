import React from 'react';
import { connect } from 'react-redux';
import { Fieldset, InputLabel, InputButton, Forms } from '../utilities/Forms.js';
import { 
	setRoute,
	onSubmitSignin,
	setEmail, 
	setPassword } from '../../redux/actions.js';

const mapStateToProps = state => {
	return {
		signInEmail: state.setSigninState.signInEmail,
		signInPassword: state.setSigninState.signInPassword,
		signInSubmit: state.setSigninState.signInSubmit, //I will fetch server with this value
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onEmailChange: event => dispatch(setEmail(event.target.value)),
		onPasswordChange: event => dispatch(setPassword(event.target.value)),
		setRoute: route => dispatch(setRoute(route)),
		onSigninSubmit: creds => dispatch(onSubmitSignin(creds))
	};
};

class Signin extends React.Component {

	render(){

		const { 
			setRoute, 
			setSubmit, 
			onEmailChange, 
			onPasswordChange, 
			signInEmail, 
			signInPassword, 
			signInSubmit, 
			onSigninSubmit
		} = this.props;

		return (

			<Forms>
			    <Fieldset id="sign_in" legend='Sign In'>
			      <InputLabel key='email' label='Email' type='email' name='email-address'func={onEmailChange} />
			      <InputLabel key='password' label='Password' type='password' name='password' func={onPasswordChange} />
			    </Fieldset>
			    <InputButton 
			    	value='Sign In' 
			    	onClick={() => {
			    		onSigninSubmit(signInSubmit);
			    }} />
			    <div className="lh-copy mt3">
			      <a href="#0" className="f6 link dim b black grow db"
			      	onClick={()=> setRoute('register')}>New Employee: Register Here</a>
			    </div>
			</Forms>
		);

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Signin);

