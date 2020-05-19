import React from 'react';
import './Tweet.css';
import profile from '../../assets/profile.svg';
import { FiChevronDown, FiMail, FiRepeat, FiHeart, FiMessageCircle } from 'react-icons/fi';
import { BsCardImage } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import person from '../../assets/person2.svg';
import post from '../../assets/post.jpg';


const Tweet = () => (
    <div className="container-tweet">
        <section className="tweet-header">
            <div className="tweet-profile-box">
                <img src={profile} alt="Profile" className="tweet-profile-img"/>
            </div>
            <div className="ui icon input tweet-post">
                <i className="icon tweet-search-icon"><BsCardImage size={20} /></i>
                <input type="text" placeholder="What's happening?"/>
            </div>
        </section>
        <section className="twitter-main">
            <div className="liked">
                <FaHeart size={14}/>
                <p className="liked-paragraph">bilbo bolseiro liked</p>
            </div>
            <div className="tweet-post-description">
                <div className="description-box-img">
                    <img src={person} alt="" style={{width:'60px'}}/>
                </div>
                <div className="description-text">
                    <div className="description-text-header">
                        <div className="text-header">
                            <h5 className="name-tweet">Christy HS</h5>
                            <p className="email email-post">@hauescudo &middot; 15h</p>
                        </div>
                        <div>
                            <FiChevronDown size={18} />
                        </div>
                    </div>
                    <div className="description-text-content">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, qui. Quia ullam id repudiandae sit perspiciatis eos laudantium.</p>
                    </div>
                </div>
            </div>
                    <div className="post-img-box">
                        <img src={post} alt="" className="post-img"/>
                    </div>

                    <div className="post-img-features">
                        <ul className="feature-list">
                            <li><a href="/"><FiMessageCircle size={16} />&nbsp; 6</a></li>
                            <li><a href=""><FiRepeat size={16} />&nbsp; 4</a></li>
                            <li><a href=""><FiHeart size={16} />&nbsp; 60</a></li>
                            <li><a href=""><FiMail size={16} /></a></li>
                        </ul>
                    </div>
        </section>
    </div>
)

export default Tweet;