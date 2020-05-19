import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FiMail } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineBell } from 'react-icons/ai'
import { TiFlashOutline } from "react-icons/ti";
import './Header.css';
import logo from '../../assets/profile.svg';

const Header = () => (
    <header className="header">
        <div className="container-header"> 
            <nav>
                <ul className="list-header">
                    <li><a href="/"><AiOutlineHome size={18}/><span className="list-item-header">Home</span></a></li>
                    <li><a href="/"><TiFlashOutline size={18}/><span className="list-item-header">Moments</span></a></li>
                    <li><a href="/"><AiOutlineBell size={18}/><span className="list-item-header">Notifications</span></a></li>
                    <li><a href="/"><FiMail size={18}/><span className="list-item-header messages">Messages</span></a></li>
                </ul>
            </nav>
            
            <div className="logo-box">
                <a href="/"><FaTwitter size={22} /></a>
            </div>
            
            <div className="search">
                <div className="ui icon input">
                    <i className="search icon"></i>
                    <input type="text" placeholder="Search Twitter"/>
                </div>
                <a href="/" className="image-header-box">
                    <img src={logo} alt="Profile" className="image-header"/>
                </a>
                <a href="/" className="tweet">Tweet</a>
            </div>
        </div>
    </header>
)

export default Header;