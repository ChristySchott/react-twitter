import React from 'react';

import Profile from './Profile/Profile';
import Trend from './Trend/Trend';

const Sidebar = () => (
    <div className="container-sidebar">
        <Profile />
        <Trend />
    </div>
)

export default Sidebar;