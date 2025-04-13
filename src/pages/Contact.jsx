import React, { useState } from 'react';
import './Contact.css'; // Importing the CSS file for styling

const Contact = () => {
  // State to hold form data and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Simple validation: check if all fields are filled
    if (name && email && message) {
      console.log('Form Data Submitted:', formData);  // Here you can add actual form submission logic (e.g., API call)
      setIsSubmitted(true);
      setError('');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setError('Please fill out all fields.');
      setIsSubmitted(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Contact Us</h2>

        {/* Show success message if form is submitted */}
        {isSubmitted && <p className="success-message">Thank you for reaching out!</p>}

        {/* Show error message if form submission failed */}
        {error && <p className="error-message">{error}</p>}
        
        {/* Contact form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
