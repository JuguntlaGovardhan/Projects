import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updateQuantity, setUpdateQuantity] = useState(0);
  const [paymentComplete, setPaymentComplete] = useState(false); // Track payment status

  useEffect(() => {
    // Fetch the list of items from the API
    fetch('http://localhost:8080/getitems')
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, []);

  const handleAddToCart = (itemId) => {
    // Find the item by its ID
    const itemToAdd = items.find((item) => item.itemId === itemId);

    if (itemToAdd) {
      // Add the item to the cart
      setCart([...cart, { ...itemToAdd, quantity: 1 }]);
      // Update the total price
      setTotalPrice(totalPrice + itemToAdd.itemCost);
    }
  };

  const handleDeleteItem = (itemId) => {
    // Find the index of the item to be deleted
    const itemIndex = cart.findIndex((item) => item.itemId === itemId);

    if (itemIndex !== -1) {
      // Create a copy of the cart without the deleted item
      const updatedCart = [...cart];
      const deletedItem = updatedCart.splice(itemIndex, 1)[0];

      // Update the cart and total price
      setCart(updatedCart);
      setTotalPrice(totalPrice - deletedItem.itemCost * deletedItem.quantity);
    }
  };

  const handleUpdateItem = (itemId) => {
    // Prompt the user for the quantity
    const newQuantity = parseInt(prompt('Enter the new quantity:', '1'));

    if (!isNaN(newQuantity) && newQuantity > 0) {
      // Find the item by its ID
      const itemToUpdate = cart.find((item) => item.itemId === itemId);

      if (itemToUpdate) {
        // Update the item's quantity and total price
        itemToUpdate.quantity = newQuantity;
        setTotalPrice(calculateTotalPrice(cart));
        setUpdateQuantity(newQuantity);
      }
    } else {
      alert('Invalid quantity. Please enter a valid number greater than 0.');
    }
  };

  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.itemCost * item.quantity, 0);
  };

  const totalItemsQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const handleMakePayment = () => {
    // Implement your payment logic here (e.g., make API calls, validate the cart, etc.)
    // For this example, we'll simply set the payment status to true.
    setPaymentComplete(true);

    // Display an alert with the order confirmation
    const orderConfirmationMessage = `Your payment is successfully done with a total of ₹${totalPrice.toFixed(2)} for ${totalItemsQuantity} item(s) in your cart.`;
    alert(orderConfirmationMessage);
  };

  return (
    <div>
        <Link to="/home">back</Link>
      <h1 style={{ color: "purple" }}>Items</h1>
<div className="item-list">
  {items.map((item) => (
    <div
      key={item.itemId}
      style={{
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ marginBottom: '10px' }}>
        <h3>{item.itemName}</h3>
        <p>Price: ₹{item.itemCost.toFixed(2)}</p>
      </div>
      <button
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '5px 10px',
          cursor: 'pointer',
        }}
        onClick={() => handleAddToCart(item.itemId)}
      >
        Add to Cart
      </button>
    </div>
  ))}
</div>

<h2 style={{color:"gold"}}>Shopping Cart</h2>
{cart.map((item) => (
  <div key={item.itemId} className="cart-item-box" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', backgroundColor: '#f0f0f0' }}>
    <h3>{item.itemName}</h3>
    <p>Price: ₹{item.itemCost.toFixed(2)}</p>
    <p>Quantity: {item.quantity}</p>
    <button
      onClick={() => handleDeleteItem(item.itemId)}
      style={{
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        marginRight: '5px',
        cursor: 'pointer',
      }}
    >
      Delete
    </button>
    <button
      onClick={() => handleUpdateItem(item.itemId)}
      style={{
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        cursor: 'pointer',
      }}
    >
      Update
    </button>
  </div>
))}


      <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>
      <p>Total Items Quantity: {totalItemsQuantity}</p>
      {updateQuantity > 0 && <p>Updated Quantity: {updateQuantity}</p>}

      {!paymentComplete ? (
  <>
    <button
      onClick={handleMakePayment}
      style={{
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        marginRight: '5px',
        cursor: 'pointer',
      }}
    >
      Make Payment
    </button>
    <button
      onClick={() => alert('Order has been canceled.')}
      style={{
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        cursor: 'pointer',
      }}
    >
      Cancel Order
    </button>
  </>
) : (
  <p>Payment has been made Sucessfully!</p>
)}

    </div>
  );
};

export default Menu;
