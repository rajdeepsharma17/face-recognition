import React from 'react';

const FaceRecognition = ({imageURL}) => {
    return(
        <div className = 'center' >
            <img src={imageURL} alt="face-detect"/>
        </div>
    );
}

export default FaceRecognition;