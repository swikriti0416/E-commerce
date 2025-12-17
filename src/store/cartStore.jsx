// This file makes the cart work on every page (no need to pass props everywhere)
import { create } from 'zustand';

// create() makes a "store" – like a global box we can read and write from anywhere
export const useCartStore = create((set) => ({
  cart: [],                    // starts empty
  addToCart: (product) => 
    set((state) => ({ cart: [...state.cart, product] })), // add item to array
  removeFromCart: (id) => 
    set((state) => ({ cart: state.cart.filter(p => p.id !== id) })), // remove item
}));

export default useCartStore;