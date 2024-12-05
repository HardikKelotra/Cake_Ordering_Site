import React from 'react';
import '../style/Card.css';
import { useOrderContext } from '../contextAPI/OrderCartContext';

const CartItemCard = ({ name, description, price, quantity }) => {
  const { setOrder, order } = useOrderContext();
  const totalAmount = price * quantity;

  console.log(`Rendering CartItemCard: ${name}`, { description, price, quantity });

  const handleIncrement = () => {
    setOrder((prev) => ({
      ...prev,
      [name]: (prev[name] || 0) + 1
    }));
  };

  const handleDecrement = () => {
    if (order[name] > 1) {
      setOrder((prev) => ({
        ...prev,
        [name]: prev[name] - 1
      }));
    } else if (order[name] === 1) {
      handleRemove(name);
    }
  };

  // const handleRemove = (name) => {
  //   setOrder((prev) => {
  //     const temp = { ...prev };
  //     delete temp[name];
  //     localStorage.setItem('order' , JSON.stringify(temp));
  //     return temp;
  //   });
  // };

  const handleRemove =(name) =>{
    setOrder((prev)=>{
      const temp ={...prev};
      delete temp[name];
      return temp;
    })
  }

  return (
    <div className="cart-item-card">
      <button className="remove-button" onClick={() => handleRemove(name)} aria-label="Remove item">✕</button>
      <div className="cart-item-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="quantity-controls">
          <button
            onClick={handleDecrement}
            className="quantity-btn"
            disabled={!order[name]}
            aria-label={`Decrease quantity of ${name}`}
          >
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button
            onClick={handleIncrement}
            className="quantity-btn"
            aria-label={`Increase quantity of ${name}`}
          >
            +
          </button>
        </div>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItemCard;
