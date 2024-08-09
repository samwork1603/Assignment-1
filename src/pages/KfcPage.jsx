import { useState } from 'react';
import KfcMenuData from './menus/kfcMenu.json';

const vegLogoUrl = 'https://img.icons8.com/?size=100&id=61083&format=png&color=000000';
const nonVegLogoUrl = 'https://img.icons8.com/?size=100&id=61082&format=png&color=000000';

const KfcPage = () => {
  const [cart, setCart] = useState({});

  const addToCart = (item) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      if (updatedCart[item.id]) {
        updatedCart[item.id].quantity += 1;
      } else {
        updatedCart[item.id] = {
          ...item,
          quantity: 1,
        };
      }
      return updatedCart;
    });
  };

  const removeFromCart = (item) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      if (updatedCart[item.id] && updatedCart[item.id].quantity > 1) {
        updatedCart[item.id].quantity -= 1;
      } else {
        delete updatedCart[item.id];
      }
      return updatedCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return Object.values(cart).reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div>
      <nav>
        <p>Cart: {getTotalItems()}</p>
        <p>Total Amount: ₹{getTotalAmount()}</p>
      </nav>
      {KfcMenuData.map((item) => {
        const logoUrl = item.category === 'Veg' ? vegLogoUrl : nonVegLogoUrl;

        return (
          <div key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: '100px' }} />
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <img src={logoUrl} alt={item.category} style={{ width: '30px', height: 'auto' }} />
            <div>
              <button onClick={() => removeFromCart(item)}>-</button>
              <span>QTY: {cart[item.id]?.quantity || 0}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KfcPage;
