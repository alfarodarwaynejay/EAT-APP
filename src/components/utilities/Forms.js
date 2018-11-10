import React from 'react';
import Tilt from 'react-tilt';

export const InputLabel = ({ label, func, name, type }) => {
	return (
		<div className="mt3">
		    <label className="db fw6 lh-copy f6" htmlFor="email-address">{label}</label>
		    <input 
		    	onChange={func} 
		    	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		    	type={type} 
		    	name={name}
		    	id={name} />
		</div>
	);
}

export const InputButton = ({ value, onClick }) => {
	return (
		<input 
	      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
	      	type="submit" 
	      	value={value} 
	      	onClick={onClick}
	    />
	);
}

export const Fieldset = (props) => {
	return (
		<fieldset id={props.id} className="ba b--transparent ph0 mh0">
	      <legend className="f2 fw6 ph0 mh0">{props.legend}</legend>
	      {props.children}
		</fieldset>
	);
}

export const Forms = (props) => {
	return (
		<div className="br4 center flex flex-wrap ma5">
			<Tilt className='Tilt br4 shadow-1' options={{ max : 15 }} style={{background: 'none'}}>
				<main className="pa4 black-80 Tilt-inner">
					<div className="measure">
						{props.children}    
					</div>
				</main>
			</Tilt>
		</div>
	);
}

