import React from 'react';

const Success = ({ response, setAdminRoute, setHomeDisplay }) => {
	return (
		<div className='w-80'>
			<div 
				className='center pa3 bg-washed-blue br4 mt0 mb4 shadow-5' 
				style={{background:'rgb(228, 241, 254)'}}
			>
				<h1 className='f4-l f4m f4-ns'>Update Status</h1>
			</div>
			<div className='db pa2 shadow-5  ma5 br4 bg-green center'>
				<h1>Database Update {response ? 'Success' : 'Failed'} </h1>
			</div>
			<h1 
				className='f3 f4-ns grow pv3 ph5 w-50 center mv2 mh4 bg-red br-pill grow shadow-5 pointer' 
		      	onClick={() => setHomeDisplay('home')}
		    >
		      	Home
			</h1>
			<h1 
				className='f3 f4-ns grow pv3 ph5 w-50 center mv2 mh4 bg-red br-pill grow shadow-5 pointer' 
		      	onClick={() => setAdminRoute('adminHome')}
		    >
		      	Admin
			</h1>
		</div>
	);
}

export default Success;