import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                {/* You can add your logo image or text here */}
                My App
            </div>
            <nav className="navigation">
                {/* Add your navigation links here */}
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
