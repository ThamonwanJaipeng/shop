import React from 'react';

function ShoppingCart({ cart, removeFromCart, updateQuantity, discountCode, setDiscountCode, applyDiscount, calculateTotal }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">ตะกร้าสินค้า</h2>
      {cart.length === 0 ? (
        <p>ไม่มีสินค้าในตะกร้า</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between my-2">
              <span>{item.name} x {item.quantity}</span>
              <span>{item.price * item.quantity} บาท</span>
              <div className="flex items-center">
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-green-500 text-white px-2">+</button>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-red-500 text-white px-2" disabled={item.quantity <= 1}>-</button>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-2">ลบ</button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <input 
              type="text" 
              value={discountCode} 
              onChange={(e) => setDiscountCode(e.target.value)} 
              placeholder="กรอกคูปอง" 
              className="border p-2"
            />
            <button onClick={applyDiscount} className="ml-2 bg-yellow-500 text-white px-4">ใช้คูปอง</button>
          </div>
          <div className="mt-4">
            <strong>รวม: {calculateTotal()} บาท (รวมค่าขนส่ง +100)</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
