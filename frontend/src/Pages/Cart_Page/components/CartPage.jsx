import React, { useEffect } from 'react';
import { useOrderContext } from '../../Cart_Page/contextAPI/OrderCartContext';
import CartItemCard from './Card';
import '../style/CartPage.css';

const CartPage = () => {
    const { order, menu } = useOrderContext();

    useEffect(() => {
        console.log("Order Data:", order);
    }, [order]);

    const totalCartAmount = Object.keys(order).reduce((total, itemName) => {
        const itemDetails = menu.find(item => item.item === itemName);
        const itemPrice = itemDetails ? itemDetails.price : 0;
        const itemQuantity = order[itemName] || 0;
        return total + (itemPrice * itemQuantity);
    }, 0);

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {Object.keys(order).length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    Object.keys(order).map(itemName => {
                        const itemDetails = menu.find(item => item.item === itemName);
                        if (!itemDetails) {
                            console.warn(`Item ${itemName} not found in menu.`);
                            return null;
                        }

                        return (
                            <CartItemCard
                                key={itemDetails._id}
                                name={itemDetails.item}
                                description={itemDetails.discription}
                                price={itemDetails.price}
                                quantity={order[itemName]}
                            />
                        );
                    })
                )}
            </div>
            <div className="cart-summary">
                <p>Total Amount: ${totalCartAmount.toFixed(2)}</p>
                <button onClick={() => alert(`Order Placed`)} className="checkout-button">
                    Proceed to Payment
                </button>
            </div>
        </div>
    );
};

export default CartPage;
