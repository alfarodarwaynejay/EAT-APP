import React from 'react';

const Headline = (props) => {
	return (
		<div className='dib center w-80 pa2 bg-washed-blue br4 mt0 mb4 shadow-5' >
			<h1 className='f4 f3-ns'>{props.text}</h1>
			{props.children}
		</div>
	);
}

export default Headline;