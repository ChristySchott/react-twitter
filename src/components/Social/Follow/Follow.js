import React from 'react';
import './Follow.css';
import ToFollow from './ToFollow/ToFollow';

import person1 from '../../../assets/person2.svg';
import person2 from '../../../assets/person3.svg';
import gmail from '../../../assets/gmail.svg'

const Follow = () => (
    <div className="container-trend">
        <div className="container-text">
            <h4 className="trend-title">Who to follow <span className="change">Refresh</span><span className="change">View all</span></h4>
            <ToFollow name="Aaron Powell" email="@slace" img={person2}/>
            <ToFollow name="Sarah Killen" email="@kill" img={person1}/>
        </div>
        <div className="container-email">
            <img src={gmail} alt="Gmail Icon" className="gmail-icon"/>
            <div className="container-email-text">
                <h4>Find people you know</h4>
                <p className="email-paragraph">
                    Import your contacts from Gmail
                </p>
            </div>
        </div>

        <a href="/" className="connect">
            Connect other address books
        </a>
    </div>
)

export default Follow;