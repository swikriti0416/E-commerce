//global state ho yo so (This file makes the cart work on every page (no need to pass props everywhere))
import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [], // Array of items: { ...product, quantity: 1 }

  // Add product to cart or increase quantity if already there
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        // Already in cart → increase quantity
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // New product → add with quantity 1
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }),

  // Remove entire product from cart
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  // Optional: Decrease quantity (useful in Cart page)
  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0), // remove if quantity becomes 0
    })),

  // Optional: Get total items count (for cart badge)
  getTotalItems: () => 
    useCartStore.getState().cart.reduce((total, item) => total + item.quantity, 0),

  // Optional: Get total price
  getTotalPrice: () =>
    useCartStore.getState().cart.reduce((total, item) => total + item.price * item.quantity, 0),
}));