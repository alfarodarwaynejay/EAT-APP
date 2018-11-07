import React from 'react';
import Card from '../Cards/Card.js'



const Statistics = ({ stats }) => {
	return (
		<div className='dib w-90'>
			<div 
				className='pa2 bg-washed-blue br4 mt0 mb4 mr2 ml2 shadow-5'
			>
				<h1 className='f4-l f4-m f4-ns'>Personal Statistics</h1>
			</div>
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