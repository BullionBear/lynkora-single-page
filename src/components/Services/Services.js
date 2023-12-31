import React from 'react';
import './Services.css';

function Services() {
    return (
        <div id="services" div className="services-section">
            <h2>Our Services</h2>
            <div className="services-list">
                <div className="service-item">
                    <h3>Web Development</h3>
                    <p>We create responsive and engaging websites with a focus on user experience and accessibility.</p>
                </div>
                <div className="service-item">
                    <h3>Mobile App Development</h3>
                    <p>Developing high-quality native and cross-platform mobile applications tailored to your business needs.</p>
                </div>
                <div className="service-item">
                    <h3>UI/UX Design</h3>
                    <p>Designing intuitive and visually appealing user interfaces for both web and mobile platforms.</p>
                </div>
                {/* Add more services as needed */}
            </div>
        </div>
    );
}

export default Services;
