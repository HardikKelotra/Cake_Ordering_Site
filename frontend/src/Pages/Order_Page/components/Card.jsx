import React, { useState, useEffect } from 'react';
import '../style/Card.css'; 
import { useOrderContext } from '../../Cart_Page/contextAPI/OrderCartContext';
import { Link } from 'react-router-dom';

const Card = ({ name, price, description }) => {
  const context = useOrderContext();
  const [localQuantity, setLocalQuantity] = useState(0);

  useEffect(() => {
    // Sync localQuantity with actual context quantity initially
    setLocalQuantity(context.order[name] || 0);
  }, [context.order, name]);

  const handleIncrement = () => {
    context.setOrder((prev) => ({ ...prev, [name]: (prev[name] || 0) + 1 }));
    setLocalQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (context.order[name] > 1) {
      context.setOrder((prev) => ({ ...prev, [name]: prev[name] - 1 }));
      setLocalQuantity((prev) => prev - 1);
    } else if (context.order[name] === 1) {
      handleRemove(name);
      setLocalQuantity(0);
    }
  };

  const handleRemove = (name) => {
    context.setOrder((prev) => {
      const temp = { ...prev };
      delete temp[name];
      return temp;
    });
    setLocalQuantity(0);
  };

  const handleAddToCart = () => {
    console.log("ADDED TO CART");
    setLocalQuantity(0); // Reset only the local (display) quantity
  };

  const currentQuantity = context.order[name] || 0;

  return (
    <div className="card">
      <div className="card-details">
        <h3 className="cake-name">{name}</h3>
        <p className="cake-description">{description}</p>
        <p className="cake-price">Price: ${price.toFixed(2)}</p>
        <div className="quantity-controls">
          <button 
            onClick={handleDecrement} 
            className="quantity-btn" 
            disabled={!context.order[name]}
            aria-label={`Decrease quantity of ${name}`}
          >
            -
          </button>
          <span className="quantity-display">{localQuantity}</span>
          <button 
            onClick={handleIncrement} 
            className="quantity-btn" 
            aria-label={`Increase quantity of ${name}`}
          >
            +
          </button>
        </div>
        <button 
          onClick={handleAddToCart} 
          className="add-to-cart-btn"
          aria-label={`Add ${currentQuantity} ${name}(s) to cart`}
        >
          Add to Cart
        </button>
        <Link to="/cart">
          <button
            className="go-to-cart-btn"
            aria-label={`Go to cart with ${currentQuantity} ${name}(s)`}
          >
            Go to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
