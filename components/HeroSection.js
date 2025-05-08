"use client"

import { useState } from "react"
import styles from "../styles/HeroSection.css"

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      name: "",
      email: "",
      message: "",
    })

    // Show success message
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Discover the Art of Culinary Excellence</h1>
            <p>Explore thousands of recipes, cooking tips, and culinary inspiration from chefs around the world.</p>
            <button className={styles.ctaButton}>Explore Recipes</button>
          </div>

          <div className={styles.heroForm}>
            <div className={styles.formContainer}>
              <h3>Get in Touch</h3>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}