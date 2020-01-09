import React from 'react';
import "./SingleWork.css";

function SingleWork(props) {
    // console.log(props.image);
    if(!props.clicked){
        return null;
    }
 
    return (
                           
            <div className="card">
                <img
                    className="card-img-top"
                    src={window.location.origin + props.image}
                    alt={props.title}
                    onClick={() => props.click(props.id)}
                />
            </div>

        )    
}

export default  SingleWork;