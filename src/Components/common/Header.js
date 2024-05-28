import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const page = location.pathname;

    function generateNavLinks() {
        const baseClasses = "text-white px-4 py-2 rounded";
        const activeClass = "bg-gray-500 hover:bg-gray-600";
        const inactiveClass = "bg-blue-500 hover:bg-blue-600";
        const specialClass = "bg-red-500 hover:bg-red-600";

        if (page === "/" || page === "/index") {
            return (
                <>
                    {/*<a href="#features" className={`${inactiveClass} ${baseClasses}`}>Why Equity Wise</a>*/}
                    <Link to="/" className={`${activeClass} ${baseClasses}`}>Why Equity Wise</Link>
                    <Link to="/myportfolio" className={`${inactiveClass} ${baseClasses}`}>My Portfolio</Link>
                    <Link to="/mywishlist" className={`${inactiveClass} ${baseClasses}`}>My Wishlist</Link>
                    <Link to="/marketupdate" className={`${inactiveClass} ${baseClasses}`}>Market Update</Link>
                    <Link to="/login" className={`${inactiveClass} ${baseClasses}`}>Login</Link>
                    <Link to="/signup" className={`${specialClass} ${baseClasses}`}>Get Started</Link>
                </>
            );
        } else if (page === "/myportfolio") {
            return (
                <>
                    <Link to="/" className={`${inactiveClass} ${baseClasses}`}>Why Equity Wise</Link>
                    <Link to="/myportfolio" className={`${activeClass} ${baseClasses}`}>My Portfolio</Link>
                    <Link to="/mywishlist" className={`${inactiveClass} ${baseClasses}`}>My Wishlist</Link>
                    <Link to="/marketupdate" className={`${inactiveClass} ${baseClasses}`}>Market Update</Link>
                    <Link to="/login" className={`${inactiveClass} ${baseClasses}`}>Login</Link>
                    <Link to="/signup" className={`${specialClass} ${baseClasses}`}>Get Started</Link>
                </>
            );
        } else if (page === "/mywishlist") {
            return (
                <>
                    <Link to="/" className={`${inactiveClass} ${baseClasses}`}>Why Equity Wise</Link>
                    <Link to="/myportfolio" className={`${inactiveClass} ${baseClasses}`}>My Portfolio</Link>
                    <Link to="/mywishlist" className={`${activeClass} ${baseClasses}`}>My Wishlist</Link>
                    <Link to="/marketupdate" className={`${inactiveClass} ${baseClasses}`}>Market Update</Link>
                    <Link to="/login" className={`${inactiveClass} ${baseClasses}`}>Login</Link>
                    <Link to="/signup" className={`${specialClass} ${baseClasses}`}>Get Started</Link>
                </>
            );
        } else if (page === "/marketupdate") {
            return (
                <>
                    <Link to="/" className={`${inactiveClass} ${baseClasses}`}>Why Equity Wise</Link>
                    <Link to="/myportfolio" className={`${inactiveClass} ${baseClasses}`}>My Portfolio</Link>
                    <Link to="/mywishlist" className={`${inactiveClass} ${baseClasses}`}>My Wishlist</Link>
                    <Link to="/marketupdate" className={`${activeClass} ${baseClasses}`}>Market Update</Link>
                    <Link to="/login" className={`${inactiveClass} ${baseClasses}`}>Login</Link>
                    <Link to="/signup" className={`${specialClass} ${baseClasses}`}>Get Started</Link>
                </>
            );
        } else if (page === "/signup") {
            return (
                <>
                    <Link to="/" className={`${inactiveClass} ${baseClasses}`}>Why Equity Wise</Link>
                    <Link to="/myportfolio" className={`${inactiveClass} ${baseClasses}`}>My Portfolio</Link>
                    <Link to="/mywishlist" className={`${inactiveClass} ${baseClasses}`}>My Wishlist</Link>
                    <Link to="/marketupdate" className={`${inactiveClass} ${baseClasses}`}>Market Update</Link>
                    <Link to="/login" className={`${inactiveClass} ${baseClasses}`}>Login</Link>
                    <Link to="/signup" className={`${activeClass} ${baseClasses}`}>Get Started</Link>
                </>
            );
        } else if (page === "/login") {
            return (
                <>
                    <Link to="/" className={`${inactiveClass} ${baseClasses}`}>Why Equity Wise</Link>
                    <Link to="/myportfolio" className={`${inactiveClass} ${baseClasses}`}>My Portfolio</Link>
                    <Link to="/mywishlist" className={`${inactiveClass} ${baseClasses}`}>My Wishlist</Link>
                    <Link to="/marketupdate" className={`${inactiveClass} ${baseClasses}`}>Market Update</Link>
                    <Link to="/login" className={`${activeClass} ${baseClasses}`}>Login</Link>
                    <Link to="/signup" className={`${specialClass} ${baseClasses}`}>Get Started</Link>
                </>
            );
        } else {
            return (
                <>
                    <Link to="/" className={`${inactiveClass} ${baseClasses}`}>Why Equity Wise</Link>
                    <Link to="/myportfolio" className={`${inactiveClass} ${baseClasses}`}>My Portfolio</Link>
                    <Link to="/mywishlist" className={`${inactiveClass} ${baseClasses}`}>My Wishlist</Link>
                    <Link to="/marketupdate" className={`${inactiveClass} ${baseClasses}`}>Market Update</Link>
                    <Link to="/login" className={`${inactiveClass} ${baseClasses}`}>Login</Link>
                    <Link to="/signup" className={`${specialClass} ${baseClasses}`}>Get Started</Link>
                </>
            );
        }
    }

    return (
        <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-10">
            <section className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img src="/assets/images/EW_Long.png" alt="Equity Wise Logo" className="w-32 h-auto" />
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