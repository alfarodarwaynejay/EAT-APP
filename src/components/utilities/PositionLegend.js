import React from 'react';

const PositionLegend = () => {
	return (
		<div className='b center pv1 bg-red flex'>
			<div className='tl w-40 bg-yellow'>
				<ul>
					<li>SD: Senior Developer</li>
					<li>Tl: Team Lead</li>
					<li>SM: Scrum Master</li>
					<li>IA: Information Architect</li>
					<li>UX: User Experience</li>
				</ul>
			</div>
			<div className='tl pa2 w-40 bg-yellow'>
				<ul >
					<li>UI: User Interface</li>
					<li>QA: QA Tester</li>
					<li>BE: Back-end Engineer</li>
					<li>PM: Project Manager</li>
					<li>JD: Juinor Developer</li>
				</ul>
			</div>
		</div>
	);
}

export default PositionLegend;