import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                {/* Correct way to reference the image in the public folder */}
                <img src="/images/logo.png" alt="Logo" />
            </div>
            <nav className="navigation">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
