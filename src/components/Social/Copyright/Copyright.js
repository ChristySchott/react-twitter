import React from 'react';
import './Copyright.css';
import { FiExternalLink } from "react-icons/fi";

const Copyright = () => (
    <div className="container-copyright">
        <div className="copyright-list">
            <ul>
                <li><a href="/">&copy; 2020 Twitter</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Help</a></li>
                <li><a href="/">Terms</a></li>
                <li><a href="/">Privacy policy</a></li>
                <li><a href="/">Cookies</a></li>
                <li><a href="/">Ads info</a></li>
                <li><a href="/">Brand</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Status</a></li>
                <li><a href="/">Apps</a></li>
                <li><a href="/">Jobs</a></li>
                <li><a href="/">Business</a></li>
                <li><a href="/">Developers</a></li>
            </ul>
        </div>

        <div className="copyright-advertise">
            <FiExternalLink size={18}/> <p className="change">Advertise with Twitter</p>
        </div>
        
    </div>
)

export default Copyright;