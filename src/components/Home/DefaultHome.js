import React from 'react';

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
		      		<div style={{width: '300px'}}>
		      			<h1 
		      				className='f4-l f4-m f4-ns pa3 mt2 mb2 ma4 bg-orange br-pill grow shadow-5 pointer' 
		      				onClick={() => setHomeDisplay('evaluateDefault')}
		      			>
		      				Evaluate
		      			</h1>

		      		</div>
	      		}
	      		<div style={{width: '300px'}}>
	      			<h1 
	      				className='f4-l f4-m f4-ns pa3 mt2 mb2 ma4 bg-orange br-pill grow shadow-5 pointer' 
	      				onClick={() => setHomeDisplay('statistics')}
	      			>
	      				Statistics
	      			</h1>
	      		</div>	
	      	</div>
      	</div>	
	);
}

export default DefaultHome;