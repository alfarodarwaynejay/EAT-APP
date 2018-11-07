import React from 'react';
import Tilt from 'react-tilt';
import { connect } from 'react-redux';
import { 
	setRoute,
	onSubmitSignin,
	setEmail, 
	setPassword } from '../../redux/actions.js';

const mapStateToProps = state => {
	return {
		signInEmail: state.setSigninState.signInEmail,
		signInPassword: state.setSigninState.signInPassword,
		signInSubmit: state.setSigninState.signInSubmit,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onEmailChange: event => dispatch(setEmail(event.target.value)),
		onPasswordChange: event => dispatch(setPassword(event.target.value)),

		setRoute: route => dispatch(setRoute(route))
	};
};

class Signin extends React.Component {

	render(){

		const { setRoute, setSubmit, onEmailChange, onPasswordChange, signInEmail, signInPassword, signInSubmit } = this.props;

		return (

			<div className="br4 center flex flex-wrap ma5">
				<Tilt className='Tilt br4 shadow-1' options={{ max : 15 }} style={{background: 'none'}}>
					<main className="pa4 black-80 Tilt-inner">
					  <div className="measure">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input 
					        	onChange={onEmailChange} 
					        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="email" 
					        	name="email-address"  
					        	id="email-address" />
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input 
					        	onChange={onPasswordChange}
					        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="password" 
					        	name="password"  
					        	id="password" />
					      </div>
					    </fieldset>
					    <div className="">
					      <input 
					      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					      	type="submit" 
					      	value="Sign in" 
					      	onClick={() => {

					      		setRoute('home');
					      		console.log(signInSubmit);
					      	}}
					      />
					    </div>
					    <div className="lh-copy mt3">
					      <a href="#0" className="f6 link dim b black grow db"
					      	onClick={()=> setRoute('register')}>New Employee: Register Here</a>
					    </div>
					  </div>
					</main>
				</Tilt>
			</div>
		);

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Signin);

