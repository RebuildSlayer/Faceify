import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
	return(
		<div className="white tc font">
			 <div className="f3">
			 	{`${name}, your current entry count is......`}
			 </div>
			 <div className="f1">
			 	{entries}
			 </div>
		</div>
	);
}



export default Rank;