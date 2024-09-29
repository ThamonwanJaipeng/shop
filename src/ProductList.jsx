import React from 'react';

const products = [
  { id: 1, name: 'Notebook', price: 35000, image: 'https://media-cdn.bnn.in.th/231422/Asus-Notebook-Vivobook-15-X1500EA-01.jpg'},
  { id: 2, name: 'iphone', price: 30000, image: 'https://www.techoffside.com/wp-content/uploads/2022/04/iPhone-16-pro.jpg' },
  { id: 3, name: 'Watch', price: 5000, image: 'https://lzd-img-global.slatic.net/g/p/abab0343ea098cae0f38af166a00214a.jpg_720x720q80.jpg' },
  { id: 4, name: 'Necklace', price: 1500, image: 'https://via.placeholder.com/150?text=สร้อย' },
  { id: 5, name: 'Ring', price: 2000, image: 'https://via.placeholder.com/150?text=แหวน' },
  { id: 6, name: 'CPU', price: 8000, image: 'https://via.placeholder.com/150?text=ซีพียู' },
  { id: 7, name: 'keyboard', price: 1500, image: 'https://via.placeholder.com/150?text=แป้นพิมพ์' },
  { id: 8, name: 'Mount', price: 1000, image: 'https://via.placeholder.com/150?text=เม้าท์' },
  { id: 9, name: 'chair', price: 4000, image: 'https://via.placeholder.com/150?text=เก้าอี้' },
  { id: 10, name: 'computer', price: 40000, image: 'https://via.placeholder.com/150?text=คอม' },
];

function ProductList({ addToCart }) {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {products.map(product => (
        <div key={product.id} className="min-w-[200px] max-w-[250px] border p-4">
          <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
          <h2 className="font-bold">{product.name}</h2>
          <p>ราคา: {product.price} บาท</p>
          <button 
            onClick={() => addToCart(product)} 
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            สั่งซื้อ
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
