'use client';

import { useState } from 'react';
import "../../styles/contact.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    console.log('Message sent:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-container">
      <h1>📬 Contact Us</h1>

      <div className="contact-info">
        <p><strong>📞 Phone:</strong> +91 9876543210</p>
        <p><strong>✉️ Email:</strong> support@culinarycorner.com</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
        {submitted && <p className="success">Thank you! We'll get back to you soon. 💌</p>}
      </form>
    </div>
  );
}