import React from 'react';
import './Social.css';

import Follow from './Follow/Follow';
import Copyright from './Copyright/Copyright';

const Social = () => (
    <div className="container-social">
        <Follow />
        <Copyright />
    </div>
)

export default Social;