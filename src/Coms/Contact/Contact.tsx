"use client";

import React from 'react';
import styles from './Contact.module.css';
import { assets } from '@/src/assets/assets';
function Contact() {
    return (
        <>
        <a href={`https://wa.me/212607848440`}>
            <div className={styles.Whatsapp}>
                <img src={assets.Whatsappico.src} alt="" />
            </div>
        </a>
        
        <section className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <h2 className={styles.contactTitle}>Contact Us</h2>
                <div className={styles.contactContent}>
                    <br />
                    <form className={styles.contactForm}>
                        <label htmlFor="name" className={styles.formLabel}>Name:</label>
                        <input type="text" id="name" name="name" className={styles.formInput} placeholder="Your Name" required />

                        {/* <label htmlFor="email" className={styles.formLabel}>Phone:</label>
                        <input type="phone" id="phone" name="phone" className={styles.formInput} placeholder="0600000000" required /> */}

                        <label htmlFor="message" className={styles.formLabel}>Message:</label>
                        <textarea id="message" name="message" className={styles.formTextarea} placeholder="Your Message" required></textarea>

                        <button type="submit" className={styles.submitButton} onClick={()=>{
                            const nameEl = document.getElementById('name') as HTMLInputElement;
                            const name = nameEl.value.trim(); // Trim to remove extra spaces

                            const textarea = document.getElementById('message') as HTMLTextAreaElement;
                            const message = textarea.value.trim(); // Trim to remove extra spaces
                            //TODO: fix shit hire
                            if (name && message) { // Check if the message is not empty
                              const encodedName = encodeURIComponent(name);
                              const encodedMessage = encodeURIComponent(message); // URL encode the message
                              const whatsappUrl = `https://wa.me/212607848440?text=السلام انا اسمي ${encodedName} اريد ان اقدم تعليقا بخصوص ${encodedMessage}`;
                              location.href = whatsappUrl;
                            } else {
                              alert('al marjo mal2 kola khana');
                            }
                            }} >Send Message</button>
                    </form>
                </div>
            </div>
        </section>
        <div className={styles.contactInfo}>
            <p className={styles.infoItem}>     📞 Phone: +212 607848440</p>
            <p className={styles.infoItem}>     📍 Address: Moroco, Tan-Tan</p>
        </div>
        </>
    );
}

export default Contact;
