import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

function App() {
  const [cart, setCart] = useState([]);
  const [discountCode, setDiscountCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const applyDiscount = () => {
    if (discountCode === "DISCOUNT10") {
      setDiscountAmount(10);
    } else {
      setDiscountAmount(0);
    }
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const shipping = 100;
    return subtotal + shipping - discountAmount;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold my-4">Shop-MJU</h1>
      <ProductList addToCart={addToCart} />
      <ShoppingCart 
        cart={cart} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity} 
        discountCode={discountCode} 
        setDiscountCode={setDiscountCode} 
        applyDiscount={applyDiscount}
        calculateTotal={calculateTotal}
      />
    </div>
  );
}

export default App;
