import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    
    function handleSubmit(event) {
        event.preventDefault(); 
        console.log("Form submitted");

        const formData = {
            name,
            email,
            message
        };

        // Set loading to true
        setIsLoading(true);

        // Implementing timeout for fetch
        const fetchTimeout = new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('Request timed out')), 5000); // 5000 ms timeout
        });

        Promise.race([fetchTimeout, fetch(`${process.env.REACT_APP_API_BASE_URL}/v1/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'API-Key': `${process.env.REACT_APP_API_KEY}`
            },
            body: JSON.stringify(formData),
        })])
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
        })
        .finally(() => {
            setIsLoading(false); // Reset loading state
        });
    }

    return (
        <div id="contact" className="contact-section">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit" disabled={isLoading}>Send Message</button>
                {isLoading && <p>Loading...</p>} {/* Show loading message */}
                {submitStatus && <p className="submit-status">{submitStatus}</p>}
            </form>
        </div>
    );
}

export default Contact;
