import React from 'react';
import Card from '../../utilities/Card.js'
import Headline from '../../utilities/Headline.js'



const Statistics = (props) => {
	const { name, id, position, stats } = props;
	
	return (
		<div className='dib w-90'>
			<Headline text='Personal Statistics' />
			<div>
				<Card
					name={stats[0].hype_best} 
					jsx={
						<div>
							<h1 className='f3-l f3-m f3-ns'>Name: {stats[0].name}</h1>
							<h1 className='f3-l f3-m f3-ns'>Employee ID: {stats[0].employee_id}</h1>
							<h1 className='f3-l f3-m f3-ns'>Position: {stats[0].position}</h1>
							<h2 className='f4-l f4-m f4-ns'>Attendance: {stats[0].attendance}</h2>
							<h2 className='f4-l f4-m f4-ns'>Code-Effeciency: {stats[0].code_effeciency}</h2>
							<h2 className='f4-l f4-m f4-ns'>Code-Readability: {stats[0].code_readability}</h2>
							<h2 className='f4-l f4-m f4-ns'>Team-Player: {stats[0].team_player}</h2>
							<h2 className='f4-l f4-m f4-ns'>Tools IQ: {stats[0].tools_iq}</h2>
							<h2 className='f4-l f4-m f4-ns'>Resourceful: {stats[0].resourceful}</h2>
							<h2 className='f4-l f4-m f4-ns'>Courteous: {stats[0].courteous}</h2>
							<h2 className='f4-l f4-m f4-ns'>Coding Passion: {stats[0].coding_passion}</h2>
							<h2 className='f4-l f4-m f4-ns'>Hype Beast: {stats[0].hype_beast}</h2>
						</div>
					} 
				/>
			</div>
		</div>
	);
}

export default Statistics;