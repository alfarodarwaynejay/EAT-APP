import React from 'react';

const Card = ({ name, jsx, news }) => {

	return (
		<div 
			className={`f3-l f3-m f3-ns ${news? 'bg-light-red w-90 ma4 ph4 pv3' : 'bg-green w-80 ma2 pa3'} dib br4  grow bw2 shadow-5 tc pointer `}
			
			>
			{ name &&
			<img alt='robots' src={`https://robohash.org/${name}?100x100`} />
			}
			{jsx}
		</div>
	);
}

export default Card;