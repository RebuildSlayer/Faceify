import React from 'react';

const Navigation = ({onRouteChange , page}) => {
	if(page==='Home')
	return(
		<div>
				<nav className="flex justify-end">
				<p className="dim ma3 black f3
				 underline link pointer"
				 onClick={() => {
				 		onRouteChange('SignIn','SignIn');
				 }
				 }>
				 Sign Out</p>
			</nav>
		</div>
	);
	else if(page==='Register')
	return(
		<div>
			<nav className="flex justify-end">
				<p className="dim ma3 black f3
				 underline link pointer"
				 onClick={() => onRouteChange('SignIn','SignIn')}>
				 Sign In</p>
 {			/*	<p className="dim ma3 black f3
				 underline link pointer"
				 onClick={() => onRouteChange('SignIn','SignIn')}>
				 Sign Out</p>*/ }
			</nav>
		</div>
	);
	else if(page==='SignIn')
	return(
		<div>
			<nav className="flex justify-end">
				<p className="dim ma3 black f3
				 underline link pointer"
				  onClick={() => {
		    	return(
		    	onRouteChange('Register','Register')
				);
			}}>Register</p>
			</nav>
		</div>
	);
}



export default Navigation;