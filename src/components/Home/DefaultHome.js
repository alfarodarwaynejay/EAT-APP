import React from 'react';
import ButtonMaker from '../utilities/ButtonMaker.js'

const DefaultHome = ({ evaluate, setHomeDisplay}) => {

	return (
		<div>
      		<div className='center flex-wrap mb5'>
	      		<h1 className='f3-l f3-m f3-ns w-70'>Welcome to Employee Assessment Tool</h1>
	      		<h1 className='f3-l f3-m f3-ns w-70'>
	      			{evaluate ? 'It is time to evaluate your team!' : 'Evaluation period ended!'}
	      		</h1>
	      	</div>
	      	<div className='center flex-wrap w-70'>
	      		{ evaluate && 
		      		<ButtonMaker 
						style={{width: '450px'}}
						text='Evaluate' 
						onClick={() => setHomeDisplay('evaluateDefault')} 
						className='f3 f4-ns w-50 bg-orange pa3' 
					/>	
	      		}
	      		
				<ButtonMaker 
					style={{width: '450px'}}
					text='Statistics' 
					onClick={() => setHomeDisplay('statistics')} 
					className='f3 f4-ns w-50 bg-orange pa3' 
				/>	
	      	</div>
      	</div>	
	);
}

export default DefaultHome;