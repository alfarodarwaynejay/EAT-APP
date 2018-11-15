import React from 'react';

const ButtonMaker = ( { text, onClick, className, style, margin, disable }) => {
	return (
		<div style={style}>
			<h1 
				className={`${className} grow center ${ margin ? margin:'mh4 mv2'} br-pill grow shadow-5 pointer`}
		      	onClick={onClick}
		      	>
		      	{text}
			</h1>
		</div>
	);
}

export default ButtonMaker;