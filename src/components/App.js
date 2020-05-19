import React from 'react';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Tweet from './Tweet/Tweet';
import Social from './Social/Social';
import './App.css';

const App = () => (
    <React.Fragment>
        <Header />
        <div className="container">
            <Sidebar />
            <Tweet />
            <Social />
        </div>
    </React.Fragment>
)

export default App;