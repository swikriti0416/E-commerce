// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <header className="sticky top-0 z-50 bg-white border-b">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="h-16 flex items-center justify-between">

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2">
//             <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
//               S
//             </div>
//             <span className="text-xl font-extrabold text-gray-900">
//               ShopEasy
//             </span>
//           </Link>

//           {/* Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             {["Home", "Products", "Wishlist", "About"].map((item) => (
//               <Link
//                 key={item}
//                 to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                 className="text-sm font-medium text-gray-600 hover:text-blue-600 transition"
//               >
//                 {item}
//               </Link>
//             ))}
//           </nav>

//           {/* Actions */}
//           <div className="flex items-center gap-4">
            
//             {/* Search */}
//             <button className="p-2 rounded-lg hover:bg-gray-100 transition">
//               <svg
//                 className="w-5 h-5 text-gray-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </button>

//             {/* Wishlist */}
//             <Link
//               to="/wishlist"
//               className="relative p-2 rounded-lg hover:bg-gray-100 transition"
//             >
//               <svg
//                 className="w-5 h-5 text-gray-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                 />
//               </svg>
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
//                 4
//               </span>
//             </Link>

//             {/* Cart */}
//             <Link
//               to="/cart"
//               className="relative p-2 rounded-lg hover:bg-gray-100 transition"
//             >
//               <svg
//                 className="w-5 h-5 text-gray-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                 />
//               </svg>
//               <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
//                 2
//               </span>
//             </Link>

//             {/* Checkout */}
//             <Link
//               to="/checkout"
//               className="ml-2 bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition"
//             >
//               Checkout
//             </Link>

//           </div>

//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
