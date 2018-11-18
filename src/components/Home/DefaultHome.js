import React from 'react';
import ButtonMaker from '../utilities/ButtonMaker.js'
import Card from '../utilities/Card.js'

const DefaultHome = ({ evaluate, setHomeDisplay, newsList, newsVisible, toggleNews }) => {

	return (
		<div>
      		<div className='center flex-wrap'>
	      		<h1 className='f4 f3-ns w-70'>Welcome to Employee Assessment Tool</h1>
	      		<h1 className='f4 f3-ns w-70'>
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
	      	<div className='w-70 center'>
		      	{ (!!newsList.length &&
		      		<Card 
			      		news
			      		jsx={
			      			<div>
			      				<div className='flex flex-wrap'>
				      				<h1 className='tl f4 f3-ns w-50'>News:</h1>
				      				<h1 
				      					className='tr f4 f3-ns w-50 blue dim link pointer'
				      					onClick={()=> toggleNews(newsVisible)}
				      				>
				      					{newsVisible ? 'HIDE' : 'SHOW'}
				      				</h1>
			      				</div>
			      				{ newsVisible && (newsList.map((item, i) => <h2 key={i} className='tl pl3 f4 f3-ns'>{i+1}.) {item}</h2>))}		
		      					{newsVisible && <div className='flex flex-wrap'>
				      				<h1 className='tl f4 f3-ns w-50'></h1>
				      				<h1 
				      					className='tr f4 f3-ns w-50 blue dim link pointer'
				      					onClick={()=> toggleNews(newsVisible)}
				      				>
				      					{newsVisible ? 'HIDE' : 'SHOW'}
				      				</h1>
			      				</div>}
			      			</div>
			      		} 
			      	/>)
		      	}
	      	</div>
      	</div>	
	);
}

export default DefaultHome;