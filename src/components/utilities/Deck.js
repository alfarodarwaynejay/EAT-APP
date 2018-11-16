import React from 'react';
import Card from './Card.js';

class Deck extends React.Component {

	render() {
		const { 
			employee, 
			setEvalRoute, 
			setEvaluateTeamMate, 
			flag, 
			setAdminRoute, 
			setEmpStats, isGod
		} = this.props;

		return (
			<div>
				{ 
				employee.map((user, i) => {
					let name = employee[i].name;
					let emp_id = employee[i].employee_id;
					let position = employee[i].position;
					let team = employee[i].team;
					let profile = employee[i].profile;

					const descript = {
						name: name, 
						employee_id: emp_id,
						position: position
					};
					
					return (
						<span
							key={i}
							onClick={() => {
								if (flag === 'evaluation') {
									setEvalRoute('evaluatePerson');
									setEvaluateTeamMate(descript);
								} else {
									setAdminRoute('employeeStatus');
									setEmpStats(descript);
								}
							}}
						>
							<Card 
								name={name}
								img={profile}
								jsx={
									<div>
										<h2 className='black f4-l f4-m f4-ns'>name: {name}</h2>
										<h2 className='black f4-l f4-m f4-ns'>Employee ID: {emp_id}</h2>
										<h2 className='black f4-l f4-m f4-ns'>position: {position}</h2>
										{ !!isGod && <h2 className='black f4-l f4-m f4-ns'>team: {team}</h2>}
									</div>
								}
								grow
							/>
						</span>
					);
				})
			}
			</div>
		);
	}
}

export default Deck;










