import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Wishlist from "./pages/wishlist";
// import Banner from "./components/Banner/Banner.jsx";
import CategoryPage from "./pages/categorypage.jsx";
// import cartStore from "./store/cartStore.jsx";

export default function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        
        {/* Navbar is OUTSIDE Routes, so it shows everywhere */}
        <Navbar handleOrderPopup={handleOrderPopup} />

        <Routes>
          {/* HOME ROUTE: Shows Hero, Banner, and Products list */}
          <Route 
            path="/" 
            element={
              <>
                <Hero handleOrderPopup={handleOrderPopup} />
                <Products />
                {/* <Banner /> */}
              </>
            } 
          />

          {/* OTHER ROUTES: Hero and Banner will NOT show here */}
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/categorypage" element={<CategoryPage />} />
         
         
        </Routes>

      </div>
    </div>
  );
}