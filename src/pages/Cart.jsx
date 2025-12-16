import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 flex flex-col md:flex-row gap-8">
      <img
        src={product.image}
        alt={product.title}
        className="w-full md:w-96 h-96 object-contain"
      />

      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

        <p className="text-2xl text-green-700 mb-4">${product.price}</p>

        <p className="text-gray-700 mb-6">{product.description}</p>

        <button
          onClick={() => addToCart(product)}
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
