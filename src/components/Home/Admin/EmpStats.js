import React from 'react';
import { connect } from 'react-redux';
import Card from '../../utilities/Card.js';
import ButtonMaker from '../../utilities/ButtonMaker.js';
import Headline from '../../utilities/Headline.js';

import { 
	toggleShowEmpList,
	fetchEmpStat,
	setEmpStatList,
	setEmpStatOrder,
} from '../../../redux/actions.js';

const mapStateToProps = state => {
	return {
		empStatList: state.setEmpStatState.empStatList,
		empStatPending: state.setEmpStatState.empStatIsPending,
		empStatShow: state.setEmpStatState.empStatShow,
		empStatError: state.setEmpStatState.empStatError,
		empStatListOrder: state.setEmpStatState.empStatListOrder
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchStatEmp: () => dispatch(fetchEmpStat()),
		togShowEmpList: bool => dispatch(toggleShowEmpList(!bool)),
		order: list => dispatch(setEmpStatList(list)),
		setOrder: value => dispatch(setEmpStatOrder(value))
	};
};

const orderList = ( list, order, func) => {
	const tempList = [ ...list ];

	if (order === 'DESCENDING') {
		func(tempList.sort((a,b) => a.overall - b.overall))
	} else {
		func(tempList.sort((a,b) => b.overall - a.overall))
	}
};

class EmpStats extends React.Component {

	componentDidMount() {
		this.props.fetchStatEmp();
		this.props.togShowEmpList(true);
	}

	render() {
		const {
			togShowEmpList,
			empStatList,
			empStatPending,
			empStatShow,
			empStatError,
			order,
			setOrder,
			empStatListOrder
		} = this.props;

		return ( 

			<div className='w-90'>
				<Headline text='Employee Statistics Rank'/>
				<div className='center flex-wrap pv3' >
					<ButtonMaker 
						style={{width: '450px'}}
						text='STATISTICS' 
						onClick={() => {
							togShowEmpList(empStatShow);
						}} 
						className='f5 f4-ns w-50 bg-orange pa3' 
					/>	
		      	</div>
		      	{ empStatShow &&

		      		(<div className='center'>

						<Card 
							news
							jsx={
								<div >
									<h5 
										className='f6 f5-ns grow dim ba br4 pa2 b--blue bw2 bg-light-blue pointer'
										onClick={()=> {
											orderList(empStatList, empStatListOrder, order);
											setOrder(empStatListOrder === 'ASCENDING' ? 'DESCENDING' : 'ASCENDING');
										}}
									>
										ORDER BY: {empStatListOrder}
									</h5>
									
									{empStatList.map((item,i) => {
										return (
											<div key={i} className='center flex flex-wrap items-center bg-green pa2 br4 ma2'>
												<div className='br4 ma3'> 
													<img 
														alt='robots' 
														src={item.profile || `https://robohash.org/${item.name}?50x50`}
														className='br4'
														max-width='100%'
														max-height='100%'
													/>
												</div>
												<div className='tl pa1'>
													<h1 className='f6 f5-ns'>Name: {item.name}  		 	   </h1>
													<h1 className='f6 f5-ns'>ID: {item.employee_id} 		   </h1>
													<h1 className='f6 f5-ns'>Position: {item.position} 	 	   </h1>
													<h1 className='f6 f5-ns'>Stats: 
														<span className='blue'>{item.overall.toFixed(2)}</span> 
													</h1>
												</div>
											</div>)
										})
									}
									<h5 
										className='f6 f5-ns grow dim ba br4 pa2 b--blue bw2 bg-light-blue pointer'
										onClick={()=> {
											orderList(empStatList, empStatListOrder, order);
											setOrder(empStatListOrder === 'ASCENDING' ? 'DESCENDING' : 'ASCENDING');
										}}
									>
										ORDER BY: {empStatListOrder}
									</h5>
								</div>
							}
						/>
					</div>)

		      	}
		      	{ empStatShow &&
					(<div className='center flex-wrap pv3' >
						<ButtonMaker 
							style={{width: '450px'}}
							text='STATISTICS' 
							onClick={() => {
								togShowEmpList(empStatShow);
							}} 
							className='f5 f4-ns w-50 bg-orange pa3' 
						/>	
			      	</div>)
		      	}
			</div>

		);
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(EmpStats);







