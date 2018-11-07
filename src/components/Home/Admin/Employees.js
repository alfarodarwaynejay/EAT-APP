import React from 'react';
import Deck from '../Cards/Deck.js';

const Employees = ({ team, setEmpStats, setAdminRoute}) => {
	return (
		<div className='dib w-90'>
			<div className='pa2 bg-washed-blue br4 mt0 mb4 mr3 ml3 shadow-5' >
				<h1 className='f3'>Manage Employee</h1>
			</div>

			<div className='pa2 bg-washed-blue br4 mt0 mb4 mr3 ml3 shadow-5'>
				<p className='center b f5 f3-ns pv3 ph5 ma4' >
		      		(Click employee to UPDATE their role or REMOVE them.)
		      	</p>
				<h1 
					className='center f5 f3-ns grow pv3 ph5 ma4 bg-orange w-50 br-pill grow shadow-5 pointer' 
			      	onClick={() => setAdminRoute('newHire')}
		      	>
		      		New Hire
		      	</h1>
			</div>
			<div>
				<Deck 
					employee={team} 
					setEmpStats={setEmpStats}
					setAdminRoute={setAdminRoute}
					flag={'employee'}
				/>
			</div>
			
		</div>
	);
}

export default Employees;