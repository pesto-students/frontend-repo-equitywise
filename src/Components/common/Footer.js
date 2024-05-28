// src/Components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#336799', marginTop: '30px' }} className="text-white py-8">
            <div className="max-w-8xl mx-auto flex flex-col items-center md:flex-row md:justify-center md:space-x-8">
                <div className="text-center md:text-center md:w-1/3 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">About Us</h3>
                    <ul>
                        <li><Link to="/about" className="hover:underline">About Us</Link></li>
                        <li><Link to="/careers" className="hover:underline">Careers</Link></li>
                        <li><Link to="/investor-relations" className="hover:underline">Investor Relations</Link></li>
                        <li><Link to="/security" className="hover:underline">Security Information</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="text-center md:text-center md:w-1/3 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Quick Links</h3>
                    <ul>
                        <li><Link to="/" className="hover:underline">Why Equity Wise</Link></li>
                        <li><Link to="/myportfolio" className="hover:underline">My Portfolio</Link></li>
                        <li><Link to="/mywishlist" className="hover:underline">My Wishlist</Link></li>
                        <li><Link to="/marketupdate" className="hover:underline">Market Update</Link></li>
                        <li><Link to="/signup" className="hover:underline">Get Started</Link></li>
                        <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
                    </ul>
                </div>
                <div className="text-center md:text-center md:w-1/3">
                    <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                    <ul className="flex justify-center md:justify-center space-x-4">
                        <li><a href="#linkedin" className="hover:underline">LinkedIn</a></li>
                        <li><a href="#facebook" className="hover:underline">Facebook</a></li>
                        <li><a href="#twitter" className="hover:underline">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <br />
            <div className="text-center">
                <p>&copy; 2024 Equity Wise. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;