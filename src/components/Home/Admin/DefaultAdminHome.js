import React from 'react';

const DefaultAdminHome = ({ setAdminRoute, setHomeDisplay }) => {

	return (
		<div className='w-80'>
				<div className='center db mb4'>
	      			<h1 className='f1-l f1-m f1-ns'>Admin Panel</h1>
	      			<h2 className='f2-l f2-m f2-ns'>Manage Aplication</h2>
	      		</div>
		      	<div className='center flex-wrap'>
		      		<div style={{width: '250px'}}>
		      			<h1 
		      				className='f4-l f4-m f4-ns pa3 mt2 mb2 ma4 bg-orange br-pill grow shadow-5 pointer'
		      				onClick={() => setAdminRoute('employees')}
		      			>
		      				Employees
		      			</h1>
		      		</div>
		      		<div style={{width: '250px'}}>
		      			<h1 
		      				className='f4-l f4-m f4-ns pa3 mt2 mb2 ma4 bg-orange br-pill grow shadow-5 pointer' 
		      				onClick={() => setAdminRoute('schedule')}
		      			>
		      				Schedule
		      			</h1>
		      		</div>
		      		<div style={{width: '250px'}}>
		      			<h1 
		      				className='f4-l f4-m f4-ns pa3 mt2 mb2 ma4 bg-orange br-pill grow shadow-5 pointer' 
		      				onClick={() => setAdminRoute('news')}
		      			>
		      				News
		      			</h1>
		      		</div>
		      		<div style={{width: '250px'}}>
		      			<h1 
		      				className='f4-l f4-m f4-ns pa3 mt2 mb2 ma4 bg-orange br-pill grow shadow-5 pointer' 
		      				onClick={() => setHomeDisplay('evaluateDefault')}
		      			>
		      				Evaluate
		      			</h1>
		      		</div>
		      	</div>
			</div>
	);

}

export default DefaultAdminHome;