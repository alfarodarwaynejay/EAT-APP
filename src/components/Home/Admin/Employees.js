import React from 'react';
import Deck from '../../utilities/Deck.js';
import Headline from '../../utilities/Headline.js'
import ButtonMaker from '../../utilities/ButtonMaker.js'

const Employees = ({ team, setEmpStats, setAdminRoute, isGod}) => {
	return (
		<div className='dib w-90'>
			<Headline text='Manage Employee' />
			<Headline text='(Click employee to UPDATE their role or REMOVE them.)' >
			<ButtonMaker text='NEW HIRE' onClick={() => setAdminRoute('newHire')} className='f6 f5-ns grow pa2 bg-orange w-50' />
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