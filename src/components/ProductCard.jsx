import React from 'react'

export default function ProductCard({ product }) {
  return (
    <div className="border rounded p-4 flex flex-col items-center shadow hover:shadow-md">
      <img src={product.image} alt={product.name} className="w-32 h-32 mb-2" />
      <h2 className="font-semibold">{product.name}</h2>
      <p>₹{product.price}</p>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-yellow-500"> {product.rating}</p>
      <button
        onClick={() => console.log(`Added to cart: ${product.name}`)}
        className="bg-blue-600 text-white px-3 py-1 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}