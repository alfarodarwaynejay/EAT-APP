import React from 'react';

const EmployeeDescript = (props) => {
	const { name, empId, position, statePosition } = props;

	return (
		<div>
			<h2>Name: {name}</h2>
			<h2>Employee ID: {empId}</h2>
			<h2> Position:
				<span 
					className={//set position color if changed
						statePosition && 'red'
					}
				>
				 	{statePosition || position}
				</span>
			</h2> 
		</div>
	);
}

export default EmployeeDescript;




