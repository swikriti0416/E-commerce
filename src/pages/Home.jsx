import { Link } from 'react-router-dom';

function Home() {
  // ... your existing hero and trending code ...

  const categories = [
    { name: 'Electronics', count: 8, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&h=600', link: '/products?category=electronics' },
    { name: 'Audio & Headphones', count: 4, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&h=600', link: '/products?category=audio' },
    { name: 'Computers & Laptops', count: 5, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&h=600', link: '/products?category=computers' },
    { name: 'Mobile & Tablets', count: 3, image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&h=600', link: '/products?category=mobile' },
    { name: 'Gaming Gear', count: 3, image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&h=600', link: '/products?category=gaming' },
    { name: 'Home & Fitness', count: 4, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&h=600', link: '/products?category=home-fitness' },
  ];

  return (
    <div className="bg-gray-50">
      {/* Your hero and trending sections */}

      {/* Shop by Category - Exact Box Style */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Shop by Category</h2>
          <p className="text-gray-600 mt-3">Explore our wide range of products</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  src={category.image}
                />
                {/* Top-right Arrow */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{category.count} Products</p>

                {/* Explore Now - Hover Only */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center text-primary font-medium text-sm">
                    Explore Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 w-4 h-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Subtle Gradient Corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-white/10 to-transparent" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;