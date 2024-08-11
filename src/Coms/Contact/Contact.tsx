"use client";

import React from 'react';
import styles from './Contact.module.css';

function Contact() {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <h2 className={styles.contactTitle}>Contact Us</h2>
                <p className={styles.contactSubtitle}>ان كانت لديكم اي مشكله المرجو ملء الخانات المناسبه او الاتصال برقمنا</p>
                <div className={styles.contactContent}>
                    <form className={styles.contactForm}>
                        <label htmlFor="name" className={styles.formLabel}>Name:</label>
                        <input type="text" id="name" name="name" className={styles.formInput} placeholder="Your Name" required />

                        <label htmlFor="email" className={styles.formLabel}>Email:</label>
                        <input type="email" id="email" name="email" className={styles.formInput} placeholder="Your Email" required />

                        <label htmlFor="message" className={styles.formLabel}>Message:</label>
                        <textarea id="message" name="message" className={styles.formTextarea} placeholder="Your Message" required></textarea>

                        <button type="submit" className={styles.submitButton} onClick={()=> alert("ارسل رساله الى الرقم الاتي  +212 607848440 ")}>Send Message</button>
                    </form>
                    <div className={styles.contactInfo}>
                        <h3 className={styles.infoTitle}>Our Contact Information</h3>
                        <p className={styles.infoItem}>📞 Phone: +212 607848440</p>
                        <p className={styles.infoItem}>📍 Address: Moroco Agadir City</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
