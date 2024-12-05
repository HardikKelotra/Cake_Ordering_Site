import React from 'react';
import '../style/Header.css';
import logoImage from '../Images/the_malwa.png';

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
                        <li><a href="/">Home</a></li>
                        <li><a href="/order">Order</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/cart" className="cart-btn">Cart</a></li>
                        <li><a href="/login" class="login-signup-btn">Login/Signup</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
