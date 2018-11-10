import React from 'react';
import Headline from './Headline.js'
import ButtonMaker from './ButtonMaker.js'

const Success = ({ response, setAdminRoute, setHomeDisplay }) => {
	return (
		<div className='w-80'>
			<Headline text='Update Status'/>
			<div className='db pa2 shadow-5  ma5 br4 bg-green center'>
				<h1>Database Update {response ? 'Success' : 'Failed'} </h1>
			</div>
			<ButtonMaker 
	      		text='Home' 
	      		onClick={() => setHomeDisplay('home')} 
		      	className='f3 f4-ns pv3 ph5 w-50 bg-red w-50' 
		    />
			<ButtonMaker 
	      		text='Admin' 
	      		onClick={() => setAdminRoute('adminHome')} 
		      	className='f3 f4-ns pv3 ph5 w-50 bg-red w-50' 
		    />
		</div>
	);
}

export default Success;