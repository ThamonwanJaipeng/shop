import React from 'react';

const products = [
  { id: 1, name: 'Notebook', price: 35000, image: 'https://tkcustomcomputer.com/assets/uploads/9ba7b3e3e40577cc77f0f8db0dc1d7b7.png'},
  { id: 2, name: 'iphone', price: 30000, image: 'https://electrotounes.tn/15622-home_default/iphone-14-pro-max-1tb-silver.jpg' },
  { id: 3, name: 'Watch', price: 5000, image: 'https://d3mijdhf1k8u77.cloudfront.net/img/goods/L/AA0213-MNK43J-P.jpg' },
  { id: 4, name: 'Necklace', price: 1500, image: 'https://down-tw.img.susercontent.com/file/50fad2847e30ddb77a1926f4015bce4f' },
  { id: 5, name: 'Ring', price: 2000, image: 'https://www.stylecnc.com/uploads/allimg/190625/1-1Z6251P939_480_360.jpg' },
  { id: 6, name: 'CPU', price: 8000, image: 'https://5.imimg.com/data5/SELLER/Default/2022/3/HC/LI/IQ/110033643/hp-cpu-core-i5-500x500.jpeg' },
  { id: 7, name: 'keyboard', price: 1500, image: 'https://th.bing.com/th/id/OIP.MxgkjikW3tl-Dws_jpNuegAAAA?rs=1&pid=ImgDetMain' },
  { id: 8, name: 'Mount', price: 1000, image: 'https://img.joomcdn.net/056f1e3dded2d04133469895ba1ef6978f4dd137_original.jpeg' },
  { id: 9, name: 'chair', price: 4000, image: 'https://cdn3.evostore.io/productimages/tc_group/l/ch2800ch_angle_01.jpg' },
  { id: 10, name: 'computer', price: 40000, image: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05591112.png' },
];

function ProductList({ addToCart }) {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 shadow-lg rounded-lg">
          <img 
            src={product.image} 
            alt={product.name} 
             className="w-full h-40 object-cover mb-2 transform hover:scale-105 transition duration-300"
          />
          <h2 className="font-bold">{product.name}</h2>
          <p>ราคา: {product.price} บาท</p>
          <button 
            onClick={() => addToCart(product)} 
            className="mt-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded w-full hover:from-blue-500 hover:to-blue-700"
          >
            สั่งซื้อ
          </button>
        </div>
      ))}
    </div>
  );
}


export default ProductList;