import React from 'react';
import './ToFollow.css';


const ToFollow = (props) => (
    <div>
       <div className="to-follow-card">
            <img src={props.img} alt="Person to Follow" className="to-follow-img"/>
            <div className="to-follow-content">
                <div className="to-follow-text">
                    <h5>{props.name}</h5>
                    <p className="email">{props.email}</p>
                </div>
                <div className="to-follow-button">
                    <a href="/" className="btn-follow">Follow</a>
                </div>
            </div>
       </div>
    </div>
)

export default ToFollow;