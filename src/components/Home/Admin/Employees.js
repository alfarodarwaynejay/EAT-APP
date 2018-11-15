import React from 'react';
import Deck from '../../utilities/Deck.js';
import Headline from '../../utilities/Headline.js'
import ButtonMaker from '../../utilities/ButtonMaker.js'

const Employees = ({ team, setEmpStats, setAdminRoute, isGod}) => {
	return (
		<div className='dib w-90'>
			<Headline text='Manage Employee' />
			<Headline text='(Click employee to UPDATE their role or REMOVE them.)' >
			<ButtonMaker text='New Hire' onClick={() => setAdminRoute('newHire')} className='f4 f3-ns grow pv3 ph5 bg-orange w-80' />
			</Headline>
			<div>
				<Deck 
					employee={team} 
					setEmpStats={setEmpStats}
					setAdminRoute={setAdminRoute}
					flag={'employee'}
					isGod={isGod}
				/>
			</div>
			
		</div>
	);
}

export default Employees;