import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');

    function handleSubmit(event) {
        event.preventDefault(); 
        console.log("Form submitted");

        const formData = {
            name,
            email,
            message
        };

        fetch('https://lynkora.com:8000/v1/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            setSubmitStatus('Message sent successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            setSubmitStatus('Failed to send message.');
        });
    }

    return (
        <div id="contact" className="contact-section">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit">Send Message</button>
                {submitStatus && <p className="submit-status">{submitStatus}</p>} {/* Display status message */}
            </form>
        </div>
    );
}

export default Contact;
