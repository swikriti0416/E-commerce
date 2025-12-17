import { Link } from 'react-router-dom'

function Home() {
  const trendingProducts = [
    {
      id: 1,
      name: 'Casual Yellow Sweater',
      price: 49.00,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400'
    },
    {
      id: 2,
      name: 'Structured Blazer',
      price: 89.00,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400'
    },
    {
      id: 3,
      name: 'Basic Cotton Tee',
      price: 28.00,
      originalPrice: 55.00,
      sale: true,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400'
    },
    {
      id: 4,
      name: 'Silk Scarf',
      price: 35.00,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400'
    }
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side */}
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
              New Collection
            </span>
            <h1 className="text-5xl font-bold mt-3 mb-4 leading-tight">
              Summer<br />
              <span className="text-blue-600">Essentials</span>
            </h1>
            <p className="text-gray-600 mb-6 max-w-md">
              Discover the latest trends in summer fashion. Lightweight fabrics, vibrant colors, and sustainable materials designed for comfort.
            </p>
            <div className="flex gap-3">
              <Link 
                to="/products"
                className="bg-blue-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Shop Now
              </Link>
              <button className="bg-white text-gray-900 px-7 py-3 rounded-full font-semibold border hover:bg-gray-50 transition">
                View Lookbook
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"
                alt="Summer Collection"
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3 max-w-xs">
                <div>
                  <p className="text-sm font-semibold">Summer Cool Series</p>
                  <p className="text-xs text-gray-500">Starting at $79.00</p>
                </div>
                <button className="bg-yellow-400 w-9 h-9 rounded-full flex items-center justify-center hover:bg-yellow-500 transition ml-auto">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Now */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Trending Now</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {trendingProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-gray-100 rounded-2xl overflow-hidden relative mb-3 h-80">
                {/* Wishlist */}
                <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-50 transition z-10">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Sale Badge */}
                {product.sale && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    SALE
                  </div>
                )}

                {/* Quick View */}
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-11 h-11 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>

                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
              <div className="flex items-center gap-2">
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-gray-900 font-bold">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;