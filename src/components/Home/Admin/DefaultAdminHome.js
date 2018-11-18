import React from 'react';
import ButtonMaker from '../../utilities/ButtonMaker.js'

const DefaultAdminHome = ({ setAdminRoute }) => {

	return (
		<div className='w-80'>
				<div className='center db mb4'>
	      			<h1 className='f1-l f1-m f1-ns'>Admin Panel</h1>
	      			<h2 className='f2-l f2-m f2-ns'>Manage Aplication</h2>
	      		</div>

		      	<div className='center flex-wrap'>
		      		
		      		<ButtonMaker 
		      			style={{width: '250px'}}
		      			text='Employees' 
		      			onClick={() => setAdminRoute('employees')} 
		      			className='f5 f3-ns grow pv3 ph5 bg-orange w-70' 
		      		/>
		      		<ButtonMaker 
		      			style={{width: '250px'}}
		      			text='Schedule' 
		      			onClick={() => setAdminRoute('schedule')} 
		      			className='f5 f3-ns grow pv3 ph5 bg-orange w-70' 
		      		/>
		      		<ButtonMaker 
		      			style={{width: '250px'}}
		      			text='News' 
		      			onClick={() => setAdminRoute('news')} 
		      			className='f5 f3-ns grow pv3 ph5 bg-orange w-70' 
		      		/>
		      		<ButtonMaker 
		      			style={{width: '250px'}}
		      			text='Statistics' 
		      			onClick={() => setAdminRoute('stats')} 
		      			className='f5 f3-ns grow pv3 ph5 bg-orange w-70' 
		      		/>
		      	</div>
			</div>
	);

}

export default DefaultAdminHome;