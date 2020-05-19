import React from 'react';
import './Trends.css'

const Trends = (props) => (
    <div>
            <div className="trends-card">
                <h5 className="trends-title">{props.hashtag}</h5>
                <span className="trends-info">{props.tweet}</span>
            </div>
    </div>
)

export default Trends;