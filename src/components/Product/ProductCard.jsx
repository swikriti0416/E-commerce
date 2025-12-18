// ProductCard.jsx (Child Component)
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <Link 
      to={`/product/${product.id}`} 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.category}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">${product.price}</span>
          <span className="text-sm text-gray-500">⭐ {product.rating}</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard