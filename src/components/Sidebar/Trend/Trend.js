import React from 'react';
import Trends from './Trends/Trends'
import './Trend.css'

const Trend = () => (
    <div className="container-trend">
        <h4 className="trend-title">Trends <span className="change">Change</span></h4>
        <Trends hashtag="#FicaemCasa" tweet="8.1K Tweets" />
        <Trends hashtag="#CoronaVirus" tweet="5.4K Tweets" />
        <Trends hashtag="#Impeachment" tweet="2.3K Tweets" />
        <Trends hashtag="#ReactDeveloper" tweet="1.7K Tweets" />
        <Trends hashtag="#communities" />
        <Trends hashtag="Trump's Obam Obsession"/>
        <Trends hashtag="#Iphone10" tweet="4.9k Tweets" />
        <Trends hashtag="#WestworldSeason3"/>
    </div>
)

export default Trend;