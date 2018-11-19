import React from 'react';

const Card = ({ name, img, jsx, news, grow, emplist}) => {

	return (
		<div 
			className={`f3-l f3-m f3-ns 
				${news? 'bg-light-red w-90 ma4 ph4 pv3' : 'bg-green w-80 ma2 pa3'} 
				${grow ? 'grow pointer' : ''} bw2 shadow-5 tc dib br4`}
			>
			{name &&
			<img alt='robots' className='br4 mv4' src={img || `https://robohash.org/${name}?100x100`} />
			}
			{jsx}
		</div>
	);
}

export default Card;
	
	
	
	
	
