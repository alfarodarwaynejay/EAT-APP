import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';
import ButtonMaker from '../../utilities/ButtonMaker.js'
import DatePickStartEnd from '../../utilities/DatePickStartEnd.js'
import Headline from '../../utilities/Headline.js'
 
import 'react-datepicker/dist/react-datepicker.css';

import { 
	setStart,
	setEnd,
	setStartVisibility,
	setEndVisibility,
	onSubmitSchedule,
	resetSubmitSchedule,
	setHomeDisplay,
	setAdminRoute,
} from '../../../redux/actions.js';

const mapStateToProps = state => {
	return {
		startDate: state.setScheduleState.startDate,
		endDate: state.setScheduleState.endDate,
		openStart: state.setScheduleState.openStart,
		openEnd: state.setScheduleState.openEnd,
		schedulePending: state.setScheduleState.submitScheduleIsPending,
		scheduleSuccess: state.setScheduleState.submitScheduleSuccess,
		error: state.setScheduleState.submitScheduleError
	};
};

const mapDispatchToProps = dispatch => {
	return {
		//I used currying because the original methods was complicated...
		changeStart: togStart => date => {
			dispatch(setStart(date));
			togStart();
		},
		changeEnd: togEnd => date => {
			dispatch(setEnd(date));
			togEnd();
		},
		toggleStart: vis => event => {
			event && event.preventDefault();
			dispatch(setStartVisibility(!vis));
		},
		toggleEnd: vis => event => {
			event && event.preventDefault();
			dispatch(setEndVisibility(!vis));
		},
		submitSched: sched => dispatch(onSubmitSchedule(sched)),
		goHome: route => dispatch(setHomeDisplay(route)),
		goAdmin: route => dispatch(setAdminRoute(route))
	};
}


class Schedule extends React.Component {

	// changeStart = (date) => {
	// 	this.setState({startDate: date})
	// 	this.toggleStart();
	// };

	// changeEnd = (date) => {
	// 	this.setState({endDate: date})
	// 	this.toggleEnd();
	// };

	// toggleStart = (event) => {
	// 	event && event.preventDefault();
	// 	this.setState({openStart: !this.state.openStart})
	// };

	// toggleEnd = (event) => {
	// 	event && event.preventDefault();
	// 	this.setState({openEnd: !this.state.openEnd})
	// };

	render() {
		const { 
			startDate, 
			endDate, 
			openStart, 
			openEnd,
			changeStart,
			changeEnd,
			submitSchedule,
			toggleStart,
			toggleEnd,
			submitSched,
			scheduleSuccess,
			schedulePending,
			error,
			goHome,
			goAdmin 
		} = this.props;

		return (
			<div className='w-80'>

				<Modal //this modal will always show while fetching to server
		          visible={schedulePending}
		          effect={'fadeInUp'}
		          width={'50%'}
		        >
		          <h1 className='red f4 f3-ns'>SUBMITTING SCHEDULE TO SERVER...</h1>
		        </Modal>

		        <Modal //show after server responded
		          visible={!!error || !!scheduleSuccess}
		          effect={'fadeInUp'}
		          width={'50%'}
		        >
		          <h1 className='red f4 f3-ns'>
		          	{
		          		(!!error ?
		          		'SOMETHING WENT WRONG WHILE UPDATING SERVER'
		          		: 'SCHEDULE UPDATE SUCCESSFUL')
		          	}
		          </h1>
		          
		              <ButtonMaker 
		                text='HOME'
		                className='link f6 f4-ns bg-orange hover-bg-red pa3 w-50' 
		                onClick={() => goHome('defaultHome')} 
		              />
		              <ButtonMaker 
		                text='ADMIN'
		                className='link f6 f4-ns bg-orange hover-bg-red pa3 w-50' 
		                onClick={() => goAdmin('adminHome')} 
		              />
		        </Modal>

				<Headline text='Set Schedule for Evaluation' />
				<div className='db pa2 shadow-5  ma5 br4 bg-green center'>
					<h1>Select Dates</h1>
					<div className='flex-wrap flex center'>
						{
							//this will make buttons for setting Start and End dates
							[
								['START', toggleStart(openStart), startDate],
								['END', toggleEnd(openEnd), endDate]
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
							changeStart={changeStart(toggleStart(openStart))}
							changeEnd={changeEnd(toggleEnd(openEnd))}
							toggleStart={toggleStart(openStart)}
							toggleEnd={toggleEnd(openEnd)}
						/>

					</div>
				</div>
				<ButtonMaker 
					text='SUBMIT' 
					onClick={() => {
						let start = startDate.format('DD-MM-YYYY');
						let end = endDate.format('DD-MM-YYYY');
						submitSched({ start, end });
						console.log(typeof {start,end});
					}} 
					className='f3 f4-ns w-50 bg-red pv3 ph5' 
				/>
			</div>
		);
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);




