import React from 'react';
import '../style/Header.css';
import logoImage from '../Images_Home/the_malwa.png'; // Adjust the logo image path accordingly
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <img src={logoImage} alt="Company Logo" />
                    <span>The Malwa's</span>
                </div>
                <nav className="navbar">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/order">Order</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/cart" className="cart-btn">Cart</Link></li>
                        <li>< a href="/login" class="login-signup-btn">Login/Signup</a></li>
                    </ul>
                </nav>
            </div>
            <h1>Bake Your Memories Every Time!</h1>
            <p>
                We are cake artists with a love for creating the sweetest part of your celebration. Choose us for custom cakes that will make your event unforgettable.
            </p>
        </header>
    );
}

export default Header;
