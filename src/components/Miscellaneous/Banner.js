import React from 'react';

const Banner = ({ logo }) => {

	return (
		<div className='dib pt2 center flex grow'>
			<img src={logo} alt='logo' style={{padding:'5px', height: 100, width:100}}/>
      		<h1 className='f1'>E.A.T.</h1>
        </div>
	);
}


export default Banner;