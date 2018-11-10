import React from 'react';
import moment from 'moment';
import ButtonMaker from '../../utilities/ButtonMaker.js'
import DatePickStartEnd from '../../utilities/DatePickStartEnd.js'
import Headline from '../../utilities/Headline.js'
 
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

	

	submitSchedule = () => {
		const start = this.state.startDate.format('DD-MM-YYYY');
		const end = this.state.endDate.format('DD-MM-YYYY');
		return { start, end };
	}

	render() {
		const { startDate, endDate, openStart, openEnd } = this.state;

		return (
			<div className='w-80'>
				<Headline text='Set Schedule for Evaluation' />
				<div className='db pa2 shadow-5  ma5 br4 bg-green center'>
					<h1>Select Dates</h1>
					<div className='flex-wrap flex center'>
						{
							//this will make buttons for setting Start and End dates
							[
								['START', this.toggleStart, startDate],
								['END', this.toggleEnd, endDate]
							].map(item => {
								return (<div key={item[0]} className='mh3'>
											<ButtonMaker text={item[0]} onClick={item[1]} className='f4 f5-ns bg-orange pv3 ph5' />
											<span className='b f4 f3-ns'>
											{item[2].format('DD-MM-YYYY')}
											</span>
										</div>);
								})
						}
						<DatePickStartEnd 
							startDate={startDate}
							endDate={endDate}
							openStart={openStart}
							openEnd={openEnd}
							changeStart={this.changeStart}
							changeEnd={this.changeEnd}
							toggleStart={this.toggleStart}
							toggleEnd={this.toggleEnd}
						/>

					</div>
				</div>
				<ButtonMaker text='SUBMIT' onClick={() => console.log(this.submitSchedule())} className='f3 f4-ns w-50 bg-red pv3 ph5' />
			</div>
		);
	}
	
}




export default Schedule;