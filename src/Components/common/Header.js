// src/Components/common/Header.js
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Header() {
    const { token, logout } = useAuth(); // Use the AuthContext to get the token and logout function
    const navigate = useNavigate();
    const location = useLocation();
    const page = location.pathname;

    const isAuthenticated = token !== null;

    const handleLogout = () => {
        logout(); // Call logout function from AuthContext
        navigate('/login'); // Redirect to /login page after logout
    };

    function generateNavLinks() {
        const baseClasses = "text-white px-4 py-2 rounded";
        const activeClass = "bg-gray-600 hover:bg-gray-800";
        const inactiveClass = "bg-blue-600 hover:bg-blue-800";
        const specialClass = "bg-red-500 hover:bg-red-600";

        const commonLinks = (
            <>
                <Link to="/" className={`${page === "/" || page === "/index" ? activeClass : inactiveClass} ${baseClasses}`}>Why Equity Wise</Link>
                <Link to="/myportfolio" className={`${page === "/myportfolio" ? activeClass : inactiveClass} ${baseClasses}`}>My Portfolio</Link>
                <Link to="/mywishlist" className={`${page === "/mywishlist" ? activeClass : inactiveClass} ${baseClasses}`}>My Wishlist</Link>
                <Link to="/marketupdate" className={`${page === "/marketupdate" ? activeClass : inactiveClass} ${baseClasses}`}>Market Update</Link>
            </>
        );

        if (isAuthenticated) {
            return (
                <>
                    {commonLinks}
                    <button onClick={handleLogout} className={`${specialClass} ${baseClasses}`}>Logout</button>
                </>
            );
        } else {
            return (
                <>
                    {commonLinks}
                    <Link to="/login" className={`${page === "/login" ? activeClass : inactiveClass} ${baseClasses}`}>Login</Link>
                    <Link to="/signup" className={`${specialClass} ${baseClasses}`}>Get Started</Link>
                </>
            );
        }
    }

    return (
        <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-10">
            <section className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img src="/assets/images/EW_Long.png" alt="Equity Wise Logo" className="w-40 h-auto" />
                </div>
                <div>
                    <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
                        &#9776;
                    </button>
                    <nav className="hidden sm:flex flex-wrap gap-2 text-base" aria-label="main">
                        {generateNavLinks()}
                    </nav>
                </div>
            </section>
        </header>
    );
}

export default Header;