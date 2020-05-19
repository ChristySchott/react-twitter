import React from 'react';

import logo from '../../../assets/profile.svg';
import './Profile.css';

const Profile = () => (
    <div className="container-profile">
        <div className="profile-info">
            <img src={logo} alt="Profile" className="user-photo"/>
            <div className="info-user">
                <h4>Fulano de Tal</h4>
                <p className="email">@fulano_tal</p>
            </div>
        </div>
        <div className="profile-details">
            <div className="detail">
                <h5>Tweets</h5>
                <span className="detail-number">591</span>
            </div>
            <div className="detail">
                <h5>Following</h5>
                <span className="detail-number">156</span>
            </div>
            <div className="detail">
                <h5>Followers</h5>
                <span className="detail-number">1,041</span>
            </div>
        </div>
    </div>
)

export default Profile;