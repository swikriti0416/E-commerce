import React from 'react';
import {link} from 'react-router-dom';
import { products } from './data/products';  

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 flex flex-col items-center bg-white shadow-md hover:shadow-xl transition-shadow"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-60 object-contain mb-4 rounded"
          />
          <h3 className="mt-2 text-lg font-semibold text-center">{product.name}</h3>
          <p className="text-primary font-bold text-xl mt-2">${product.price}</p>
          <p className="text-gray-600 text-sm mt-2 text-center">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;