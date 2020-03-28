import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Pic from './Logo3.png';

const Logo = () => {
	return(
		<div className="ma4 mt0" 
		style={{width : '140px'}}
		>

		<Tilt className="Tilt br3 shadow-5 pointer pa1" 
		options={{ max : 55 , reverse : 'false' }}>

 		<div className="Tilt-inner tc">
 		<img src={Pic} alt="Logo"
 		style={{paddingTop : '3px'}}/>
 		</div>

		</Tilt>

		</div>
		);
}
export default Logo;