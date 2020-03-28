import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange , Click }) => {
	return(
		<div className="tc">
			<p className="f4">
			{`Provide the link and see the magic of`}<strong><em> Faceify</em></strong>
			</p>
			<div>
			<div className="w-60 center center1 center0 shadow-5 br4 pa3">
				<input type="text" 
				placeholder="Enter Your URL Here" 
				className="w-70 pa3 br4 ma2 b--purple shadow-5 "
				onChange={onInputChange}/>
				<button 
				className="pointer 
				bg-light-purple b--purple shadow-5 
				link grow w-30" onClick={Click}>
				Try....!</button>
			</div>
			</div>
		</div>
	);
}



export default ImageLinkForm;