import React from 'react';
import Card from '../Cards/Card.js'
import Modal from 'react-awesome-modal';

const positionList = ['SD', 'TL', 'SM', 'IA', 'UX', 'UI', 'QA', 'BE', 'PM', 'JD'];

class EmployeeStatus extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			visibility1: false,
			visibility2: false,
			visibility3: false,
			position: '',
			deleteColor:'',
			submitValue: {}
		}
	}

	toggleModal1 = () => {
		this.setState({ visibility1: !this.state.visibility1 })
		
	}

	toggleModal2 = () => {
		this.setState({ visibility2: !this.state.visibility2 })
		
	}

	toggleModal3 = () => {
		this.setState({ visibility3: !this.state.visibility3 })
		
	}

	setPosition = (value) => {
		this.setState({position: value});
	}

	setSubmitValue = (value) => {
		this.setState({submitValue:
			{
				...value
			}
		});
	}

	submitToServer = () => {
		console.log(this.state.submitValue);
	}
	
	render() {
		const { employeeStatus } = this.props
		

		return (
			<div className='flex-wrap w-80 center'>
				<Modal
					visible={this.state.visibility1}
					effect={'fadeInUp'}
					width={'80%'}
					
					onClickAway={() => this.toggleModal1()}
				>
					<h1>CHANGE EMPLOYEE ROLE</h1>
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
					<div className='center flex-wrap f4 pa4'>

						{
							positionList.map( (position, i) => {
								return (
									<button
										key={i}
										className='center link f6 f4-ns b grow pa3
												   mv2 mh4 bg-orange br-pill hover-bg-red 
												   grow shadow-5 pointer' 
								      	onClick={() => {
								      		if (position === employeeStatus.position) {
								      			this.setPosition('');
								      			this.setSubmitValue({});
								      			this.toggleModal1();
								      		} else {
								      			this.setPosition(position);
								      			this.setSubmitValue({id: employeeStatus.employee_id, position: position, flag: 'pos'});
								      			this.toggleModal1();
								      		}
								      	}}
							      	>
							      		{position}
							      	</button>);
							})
						}
					</div>
					<div>
						<button
							className='center link f6 f4-ns b grow pa3
									   mv2 mh4 bg-orange br-pill hover-bg-red 
									   grow shadow-5 pointer' 
					      	onClick={() => this.toggleModal1()}
				      	>
				      		CANCEL
				      	</button>
					</div>
				</Modal>


				<div 
					className='center w-80 pa2 bg-washed-blue br4 mt0 mb4 shadow-5' 
					style={{background:'rgb(228, 241, 254)'}}
				>
					<h1 className='f4 f3-ns'>Managing Employee Status</h1>
				</div>
				<div>

					<Card
					width={'300px'}
						name={employeeStatus.name} 
						jsx={
							<div>
								<h2>Name: {employeeStatus.name}</h2>
								<h2>Employee ID: {employeeStatus.employee_id}</h2>
								<h2> Position:
									<span className={this.state.position && 'red'}>
									 	{this.state.position || employeeStatus.position}
									</span>
								</h2> 
								<Modal
									visible={this.state.visibility2}
									effect={'fadeInUp'}
									width={'80%'}
								>
									<h1 className='red f4 f3-ns'>REMOVING EMPLOYEE</h1>
									<button
										className='center link f6 f4-ns b grow pa3
												   mv2 mh4 bg-orange br-pill hover-bg-red 
												   grow shadow-5 pointer' 
								      	onClick={() => {
								      		this.setSubmitValue({id: employeeStatus.employee_id, flag:'del'});
								      		this.toggleModal2();
								      		this.toggleModal3();
								      	}}
							      	>
							      		CONFIRM
							      	</button>
							      	<button
										className='center link f6 f4-ns b grow pa3
												   mv2 mh4 bg-orange br-pill hover-bg-red 
												   grow shadow-5 pointer' 
								      	onClick={() => {
								      		this.toggleModal2();
								      		this.setSubmitValue({});
								      	}}
							      	>
							      		CANCEL
							      	</button>
								</Modal>
								<Modal
									visible={this.state.visibility3}
									effect={'fadeInUp'}
									width={'80%'}
								>
									<h1 className='red f6 f4-ns'>CLICK SUBMIT</h1>
								</Modal>	
							</div>
						} 
					/>
				</div>
				
				<div className='flex-wrap pa3 ma3 br4 center' >
					<h1 
					className='f4 f3-ns grow pv3 ph5 mv2 mh4 bg-orange br-pill grow shadow-5 pointer' 
			      	onClick={() => this.toggleModal1()}
			      	>
			      	PROMOTE
			      	</h1>
			      	<h1
					className='f4 f3-ns grow pv3 ph5 mv2 mh4 bg-orange br-pill grow shadow-5 pointer' 
			      	onClick={() => {
			      		if (this.state.visibility3) {
			      			this.toggleModal3();
			      		} else {
			      			this.toggleModal2();
			      		}
			      	}}
			      	>
			      	{this.state.visibility3 || this.state.visibility2 ? 'CANCEL': 'DELETE'}
			      	</h1>

					<h1 
					className='f3 f4-ns grow pv3 ph5 mv2 mh4 bg-red br-pill grow shadow-5 pointer' 
			      	onClick={() => this.submitToServer()}
			      	>
			      	SUBMIT
			      	</h1>
				</div>
			</div>

		);
	}
}

export default EmployeeStatus;


