// components/Footer.jsx
import React from 'react';
import '../style/Footer.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <h3>Contact Us</h3>
                    <p>Email: themalwas@gmail.com</p>
                    <p>Phone: +1 (860) 394-0371</p>
                </div>

                <div className="social-media">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://instagram.com/themalwas?igshid=NzZlODBkYWE4Ng%3D%3D&utm_sources" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                        <a href="https://wa.me/c/18603940371" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
