import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';



class Schedule extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: moment(),
			endDate: moment().add(7, 'days'),
			openStart: false,
			openEnd: false
		}
	}

	changeStart = (date) => {
		this.setState({startDate: date})
		this.toggleStart();
	};

	changeEnd = (date) => {
		this.setState({endDate: date})
		this.toggleEnd();
	};

	toggleStart = (event) => {
		event && event.preventDefault();
		this.setState({openStart: !this.state.openStart})
	};

	toggleEnd = (event) => {
		event && event.preventDefault();
		this.setState({openEnd: !this.state.openEnd})
	};

	cancelButton = (value) => {
		return (
			<div>
				<h1 
					className='w-25 f5 f6-ns grow pv3 ph5 center mh4 mv3 bg-orange br-pill grow shadow-5 pointer' 
			      	onClick={value === 'start' ? this.toggleStart: this.toggleEnd}
			      	>
			      	CANCEL
				</h1>
			</div>
		);
	}

	submitSchedule = () => {
		const start = this.state.startDate.format('DD-MM-YYYY');
		const end = this.state.endDate.format('DD-MM-YYYY');
		return { start, end };
	}

	render() {
		return (
			<div className='w-80'>
				<div 
					className='center pa3 bg-washed-blue br4 mt0 mb4 shadow-5' 
					style={{background:'rgb(228, 241, 254)'}}
				>
					<h1 className='f4-l f4m f4-ns'>Set Schedule for Evaluation</h1>
				</div>
				<div className='db pa2 shadow-5  ma5 br4 bg-green center'>
					<h1>Select Dates</h1>
					<div className='flex-wrap flex center'>
						{
							[
								['START', this.toggleStart, this.state.startDate],
								['END', this.toggleEnd, this.state.endDate]
							].map(item => {
								return (<div key={item[0]} className='mh3'>
											<h1 
												className='f4 f5-ns grow pv3 ph5 center mh4 mv3 bg-orange br-pill grow shadow-5 pointer' 
										      	onClick={item[1]}
										      	>
										      	{item[0]}
											</h1>
											<span className='b f4 f3-ns'>
											{item[2].format('DD-MM-YYYY')}
											</span>
										</div>);
							})
						}

						{	this.state.openStart &&
							(<DatePicker
								inline
								withPortal
							    selected={this.state.startDate}
							    selectsStart
							    startDate={this.state.startDate}
							    endDate={this.state.endDate}
							    onChange={this.changeStart}
							    showMonthDropdown
							>
								{
									this.cancelButton('start')
								}
							</DatePicker>)
						}
						
						{	this.state.openEnd &&
							(<DatePicker
								inline
								withPortal
							    selected={this.state.endDate}
							    selectsEnd
							    startDate={this.state.startDate}
							    endDate={this.state.endDate}
							    onChange={this.changeEnd}
							    showMonthDropdown
							>
								{
									this.cancelButton('end')
								}
							</DatePicker>)
						}
					</div>
				</div>
				<h1 
						className='f3 f4-ns grow pv3 ph5 w-50 center mv2 mh4 bg-red br-pill grow shadow-5 pointer' 
				      	onClick={() => console.log(this.submitSchedule())}
				      	>
				      	SUBMIT
				</h1>
			</div>
		);
	}
	
}

export default Schedule;