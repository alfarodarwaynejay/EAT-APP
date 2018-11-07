import React from 'react';

const Navigation = ({ onRouteChange, god, setHomeDisplay, setAdminRoute, setEvalRoute }) => {

	return (
		<div className='flex center mt5 justify-between w-70 black link pointer'>
			<div>
				<h3 className='grow f5-l f5-m f5-ns'>
	      			<span 
	      				className='underline dim'
	      				onClick={() => {
		      				onRouteChange('home');
		      				setHomeDisplay('defaultHome');
		      				setEvalRoute('evaluate');
		      				}
		      			}
	      			>
	      				Home
	      			</span>:
	      			<span className='underline dim'
	      				onClick={() => setHomeDisplay('profile')}
	      			>
	      				Profile{god ? `(${'admin'})` : `(${'User'})`}
	      			</span>
	      		</h3>
			</div>
			<div>
				<h3 className='grow f5-l f5-m f5-ns'>
				{ (god &&
					<span
						className='underline dim'
		      			onClick={() => {
		      				setHomeDisplay('god');
		      				setAdminRoute('adminHome');
		      				}
		      			}
		      		>
	      				Panel
	      			</span>
	      		 )
	      		} 
      			{
      			// This handles the little semicolon :)
      			 	god && <span>:</span>
      			}
					<span
						className='underline dim'
		      			onClick={() => {
		      				onRouteChange('signin');
		      				setHomeDisplay('defaultHome');
		      				}
		      			}
		      		>
	      				Logout
	      			</span>
	      		</h3>
			</div>
      	</div>
	);
}


export default Navigation;