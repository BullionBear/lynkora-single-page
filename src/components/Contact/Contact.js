import React, { useState } from 'react';
import './Contact.css';



function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(event) {
        console.log("Form submitted"); // Check if this logs
        event.preventDefault(); // Prevents default form submission behavior
    
        const formData = {
            name: name,
            email: email,
            message: message
        };
    
        // POST request to backend server
        fetch('http://localhost:8000/v1/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Assuming JSON data format
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
            // Handle success (e.g., show a success message)
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle errors here (e.g., show an error message)
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
            </form>
        </div>
    );
}

export default Contact;
