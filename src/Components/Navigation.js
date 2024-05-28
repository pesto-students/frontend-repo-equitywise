// src/Components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/marketupdate">Market Update</Link></li>
                <li><Link to="/myportfolio">My Portfolio</Link></li>
                <li><Link to="/mywishlist">My Wishlist</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/investor-relations">Investor Relations</Link></li>
                <li><Link to="/security">Security Information</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;