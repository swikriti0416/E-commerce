// src/store/wishlistStore.js
import { create } from "zustand";

export const useWishlistStore = create((set) => ({
  wishlist: JSON.parse(localStorage.getItem("wishlist") || "[]"), // Load from localStorage on start

  addToWishlist: (product) =>
    set((state) => {
      const newWishlist = [...state.wishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(newWishlist)); // Save to localStorage
      return { wishlist: newWishlist };
    }),

  removeFromWishlist: (id) =>
    set((state) => {
      const newWishlist = state.wishlist.filter((item) => item.id !== id);
      localStorage.setItem("wishlist", JSON.stringify(newWishlist)); // Save again
      return { wishlist: newWishlist };
    }),

  toggleWishlist: (product) =>
    set((state) => {
      const exists = state.wishlist.find((item) => item.id === product.id);
      let newWishlist;
      if (exists) {
        newWishlist = state.wishlist.filter((item) => item.id !== product.id);
      } else {
        newWishlist = [...state.wishlist, product];
      }
      localStorage.setItem("wishlist", JSON.stringify(newWishlist)); //  Save every time
      return { wishlist: newWishlist };
      
    }),
  getWishlistCount: () =>
    useWishlistStore.getState().wishlist.length,
  
}));