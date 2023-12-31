import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div id="contact" className="contact-section">
            <h2>Contact Us</h2>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
