import React from 'react';
import '../style/Card.css'; 
import { useOrderContext } from '../../Cart_Page/contextAPI/OrderCartContext';

const Card = ({ name, price, description }) => {
  const context = useOrderContext();

  const handleIncrement = () => {
    context.setOrder((prev)=>({...prev,[name] : (prev[name] || 0) +1}));
  };

  const handleDecrement = () => {
    if(context.order[name]>1)
    {
      context.setOrder((prev)=>({...prev , [name] : prev[name] -1}));
    }
    else if(context.order[name]===1) {
      handleRemove(name);
    }
  };

  const handleRemove = (name) => {
    context.setOrder((prev)=>{
      const temp ={...prev};
      delete temp[name];
      return temp;
    })
  };

  const handleAddToCart = () => {
    console.log("ADDED TO CART");
  };

  const handleGoToCart = () => {
    const itemQuantity = context.order[name]?.quantity || 0;
    alert(`Navigating to cart with ${itemQuantity} ${name}(s)!`);
  };

  const currentQuantity = context.order[name]?.quantity || 0;

  return (
    <div className="card">
      {/* <img src={imgSrc} alt={name} className="cake-img" /> */}
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
          <span className="quantity-display">{context.order[name]?context.order[name] : 0}</span>
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
        <a href='/cart'>
          <button
            className="go-to-cart-btn"
            aria-label={`Go to cart with ${currentQuantity} ${name}(s)`}
          >
            Go to Cart
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
