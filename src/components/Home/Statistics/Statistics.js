import React from 'react';
import Card from '../../utilities/Card.js'
import Headline from '../../utilities/Headline.js'

const descriptions = [
	'Attendance:',
	'Code-Effeciency:',
	'Code-Readability:',
	'Team-Player:',
	'Tools IQ:',
	'Resourceful:',
	'Courteous:',
	'Coding Passion:',
	'Hype Beast:'
];

const Statistics = ({ name, id, position, stats, error }) => {
	
	return (
		<div className='dib w-90'>
			<Headline text='Personal Statistics' />
			<div>
				<Card
					name={name} 
					jsx={
						<div>
							<h1 className='f4 f3-ns'>Name: {name}</h1>
							<h1 className='f4 f3-ns'>Employee ID: {id}</h1>
							<h1 className='f4 f3-ns'>Position: {position}</h1>
							<hr />
							{ !error ?
								descriptions.map((item, i) => {
									return <h2 key={i} className='f4 f3-ns'>{item} {stats[0][i]}</h2>
								})
							  : <h2 className='f4 f3-ns mv6 near-black'>{error.toString().replace('Error: ', '')}</h2>
							}
						</div>
					} 
				/>
			</div>
		</div>
	);
}

export default Statistics;