import React from 'react';
import ButtonMaker from './ButtonMaker.js'
import DatePicker from 'react-datepicker';

const DatePickStartEnd = (props) => {
	const {  
		startDate, 
		endDate, 
		changeStart,
		changeEnd, 
		toggleStart, 
		toggleEnd,
		openStart,
		openEnd 
	} = props;

	return (
		<div>
			{//this toggles the Start Date Modal
				openStart &&
				<DatePicker
					inline
					withPortal
				    selected={startDate}
				    startDate={startDate}
				    endDate={endDate}
				    onChange={changeStart}
				    showMonthDropdown
				    selectsStart
				>
					{
						<ButtonMaker text={'CANCEL'} onClick={toggleStart} className='f5 f6-ns w-25 bg-orange pv3 ph5' />
					}
				</DatePicker>
			}
			{//this toggles the End Date Modal
				openEnd &&
				<DatePicker
					inline
					withPortal
				    selected={endDate}
				    startDate={startDate}
				    endDate={endDate}
				    onChange={changeEnd}
				    showMonthDropdown
				    selectsEnd
				>
					{
						<ButtonMaker text={'CANCEL'} onClick={toggleEnd} className='f5 f6-ns w-25 bg-orange pv3 ph5' />
					}
				</DatePicker>
			}
		</div>
	);
}

export default DatePickStartEnd;