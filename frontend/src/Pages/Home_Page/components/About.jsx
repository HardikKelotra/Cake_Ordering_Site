import React from 'react';
import '../style/About.css';
import logo from '../Images_Home/the_malwa(1).png'

const About = () => {
    return (
        <section className="about">
            <div className="about-image">
                <img src= {logo} alt="Creamy Creations" />
            </div>
            <div className="about-content">
                <h2>About The Malwa's</h2>
                <p>
                    The Malwa's has been creating custom 'eggless' cakes and Indian desserts ,long before it was trendy. 
                    We started as a family bakeshop, and now we are known for our artistry and quality that continues to set trends.
                </p>
                <button className="get-directions-btn">Get Directions</button>
            </div>
        </section>
    );
};

export default About;
