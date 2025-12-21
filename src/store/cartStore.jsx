// Yo file le cart lai global banancha ra haru page ma kaam garcha (props pass garna pardaina)
import { create } from 'zustand';

export const useCartStore = create((set) => ({
  // localStorage bata load garne, chaina bhane empty array
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      let newCart;
      if (existingItem) {
        // Pahile nai cha → quantity badhaune
        newCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Naya product → quantity 1 rakhera add garne
        newCart = [...state.cart, { ...product, quantity: 1 }];
      }

      // localStorage ma save garne
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    }),

  // Pura product hataune
  removeFromCart: (id) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    }),

  // Quantity ghataune
  decreaseQuantity: (id) =>
    set((state) => {
      const newCart = state.cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // quantity 0 bhayo bhane hataune

      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    }),

  // Cart badge ko lagi total item count
  getTotalItems: () =>
    useCartStore.getState().cart.reduce((total, item) => total + item.quantity, 0),

  // Total price nikalne
  getTotalPrice: () =>
    useCartStore.getState().cart.reduce((total, item) => total + item.price * item.quantity, 0),
}));