// pages/AboutUs.jsx
import React from 'react';
import CustomerCard from '../components/CustomerCard';
import '../style/AboutUs.css';
import first from '../images/first.jpg'

const AboutUs = () => {
    const customers = [
        {
            name: "Emily Johnson",
            feedback: "I ordered a cake for my daughter's birthday, and it was absolutely stunning! The taste was perfect, and the decoration was exactly what we wanted.",
            imgSrc: first
        },
        {
            name: "Michael Brown",
            feedback: "Creamy Creations made our wedding cake, and it was a dream come true! Not only did it look amazing, but it also tasted incredible.",
            imgSrc: first
        },
        {
            name: "Sarah Lee",
            feedback: "The best cake shop in town! Their cakes are both beautiful and delicious. I highly recommend them for any occasion.",
            imgSrc: first
        },
    ];

    return (
        <div className="about-us">
            <h1>About Us</h1>
            <p className="about-text">
            At The Malwa's, we are passionate about making every celebration special. With years of experience, our talented team not only delivers custom-made cakes that look amazing and taste delicious, but also specializes in authentic Indian snacks and desserts. Whether it's a birthday, wedding, anniversary, or any event, our offerings—from mouthwatering sweets to savory treats—are here to make your celebration unforgettable.
            </p>

            <h2>What Our Customers Say</h2>
            <div className="customer-cards">
                {customers.map((customer, index) => (
                    <CustomerCard
                        key={index}
                        customerName={customer.name}
                        feedback={customer.feedback}
                        imgSrc={customer.imgSrc}
                    />
                ))}
            </div>
        </div>
    );
}

export default AboutUs;
