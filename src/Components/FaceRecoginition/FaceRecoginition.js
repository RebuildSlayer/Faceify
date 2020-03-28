import React from 'react';
import './FaceRecoginition.css';

const FaceRecoginition = ({imageURL,box}) => {
	return(
		<div className="center">
		<div className="absolute mb3 mt3 center">
		<img alt="" 
		src={imageURL} 
		id="inputImage"/>
		{
			box.map((boxData,index) => {
				return(
					<div
					key={index}
					className="bounding-Box"		
					style={{top: boxData.TR, 
							right: boxData.RC, 
							bottom: boxData.BR, 
							left: boxData.LC}} 
					>
					</div>
					);
				})
		}
		</div>
		</div>
	);	
}

export default FaceRecoginition;