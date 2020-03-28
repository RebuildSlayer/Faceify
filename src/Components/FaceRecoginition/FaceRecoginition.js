import React from 'react';
import './FaceRecoginition.css';

const FaceRecoginition = ({imageURL,box}) => {
	return(
		<div className="center">
		<div className="absolute mb3 mt3 center">
		<img alt="" 
		src={imageURL} 
		id="inputImage"/>
		<div
		className="bounding-Box"		
		style={{top: box.TR, right: box.RC, 
		bottom: box.BR, left: box.LC}} 
 		>
 		</div>
		</div>
		</div>
	);	
}

export default FaceRecoginition;