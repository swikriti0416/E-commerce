import { Link } from 'react-router-dom'
import useWishlistStore from '../store/wishlistStore'
import useCartStore from '../store/cartStore'

function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlistStore()
  const addToCart = useCartStore((state) => state.addToCart)

  const handleAddToCart = (product) => {
    addToCart(product)
    alert('Added to cart!')
  }

  const handleAddAllToCart = () => {
    wishlist.forEach(product => addToCart(product))
    alert('Added all to cart!')
  }

  const handleClearAll = () => {
    if (window.confirm('Clear wishlist?')) {
      clearWishlist()
    }
  }

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Your Wishlist is Empty</h2>
        <Link to="/products" className="text-blue-600 hover:underline">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">My Wishlist ({wishlist.length})</h2>
        <div className="flex gap-3">
          <button
            onClick={handleAddAllToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add All to Cart
          </button>
          <button
            onClick={handleClearAll}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Clear All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4 relative">
            <button
              onClick={() => removeFromWishlist(product.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-2xl"
            >
              &times;
            </button>
            
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
              <h3 className="font-semibold mb-2 line-clamp-2">{product.title}</h3>
              <p className="text-xl font-bold text-blue-600 mb-3">${product.price}</p>
            </Link>
            
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist