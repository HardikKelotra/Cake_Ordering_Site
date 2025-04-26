
import React from 'react';
import '../style/CustomerCard.css';

const CustomerCard = ({ customerName, feedback, imgSrc }) => {
    return (
        <div className="card">
            <img src={imgSrc} alt={`${customerName}`} className="customer-img" />
            <div className="card-body">
                <h3 className="customer-name">{customerName}</h3>
                <p className="customer-feedback">{feedback}</p>
            </div>
        </div>
    );
}

export default CustomerCard;
