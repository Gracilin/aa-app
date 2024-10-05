import React, { useState } from "react";
import emailjs from 'emailjs-com'; // Import EmailJS
import './Contact.css'; // Import CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation function
  const validate = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
      valid = false;
    }
    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  // Handle form change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit and EmailJS integration
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Send email using EmailJS
      emailjs.send(
        'service_m7mfm6c', // Replace with your EmailJS service ID
        'template_83t0vb2', // Replace with your EmailJS template ID
        formData,
        'JQU-vdBXe0LEv-q19' // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
      });
    }
  };

  return (
    <section id="contact">
      <div className="contact-form-container">
        {isSubmitted && <p className="success-message">Thank you! Your message has been sent.</p>}
        <form onSubmit={handleSubmit} noValidate className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;


