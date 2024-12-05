import React from 'react';
import '../style/Hero.css';
import cake_image from '../Images_Home/cake_1.png'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Bake Your Memories Every Time!</h1>
                <p>We are cake artists with a love for creating the sweetest part of your celebration.</p>
                <button className="explore-btn">Explore Menu</button>
            </div>
            <div className="hero-image">
                <img src={cake_image} alt="Cake" />
            </div>
        </section>
    );
};

export default Hero;
