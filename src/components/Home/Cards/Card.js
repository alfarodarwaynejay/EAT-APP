import React from 'react';

const Card = ({ name, jsx}) => {
	return (
		<div 
			className='w-80 f3-l f3-m f3-ns bg-green dib br4 ma2 pa3 grow bw2 shadow-5 tc pointer' 
			
			>
			{ name &&
			<img alt='robots' src={`https://robohash.org/${name}?100x100`} />
			}
			{jsx}
		</div>
	);
}

export default Card;