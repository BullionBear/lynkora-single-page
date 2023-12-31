import React from 'react';
import './Services.css';

function Services() {
    return (
        <div id="services" div className="services-section">
            <h2>Our Services</h2>
            <div className="services-list">
                <div className="service-item">
                    <h3>Telegram TradingBot</h3>
                    <p>Stay Ahead with Our Telegram TradingBot. This innovative bot lets you monitor Lynkora's trading strategies in real time. Subscribe to our trading activities at no cost and effortlessly copy trades. Interested in more tailored solutions? Don't hesitate to contact us for customized options that suit your trading needs.</p>
                </div>
                <div className="service-item">
                    <h3>Market Making App</h3>
                    <p>Optimize Your Trading with Our Market Making App. Ideal for market makers looking to launch their coins, this app facilitates seamless rebalancing across multiple platforms, including both decentralized (DEX) and centralized exchanges (CEX). Embrace the power of a solution designed for the complexities of today's trading landscape.</p>
                </div>
                <div className="service-item">
                    <h3>Option Analytic Platform</h3>
                    <p>Master the Art of Options Trading with Precision. Our Option Analytic Platform is a comprehensive solution for options traders. Combining in-depth financial knowledge with state-of-the-art statistical analysis, this platform offers a range of features including risk assessment, strategy evaluation, and market trend predictions. It's designed to empower users with actionable insights, enabling smarter decision-making in options trading.</p>
                </div>
                {/* Add more services as needed */}
            </div>
        </div>
    );
}

export default Services;
