import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <div id="home" className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <p>Where Mathematics Meets Financial Innovation. At Lynkora, we believe in harnessing
                        the power of advanced mathematical models to revolutionize the way financial 
                        products are crafted. Our mission is to innovate and optimize, transforming complex 
                        financial activities into streamlined, efficient solutions.
                    </p>
                    <button>Learn More</button>
                </div>
                <h1>Welcome to Lynkora</h1>
            </div>
        </div>
    );
}

export default HeroSection;
