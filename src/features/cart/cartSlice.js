import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart: [],
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 6,
      name: "Vegetale",
      quantity: 1,
      unitPrice: 13,
      totalPrice: 13,
    },
    {
      pizzaId: 11,
      name: "Spinach and Mushroom",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // action.payload === newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // action.payload === pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // action.payload === pizzaId
      const searchItem = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      searchItem.quantity++;
      searchItem.totalPrice = searchItem.unitPrice * searchItem.quantity;
    },
    decreaseItemQuantity(state, action) {
      const searchItem = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      searchItem.quantity--;
      searchItem.totalPrice = searchItem.unitPrice * searchItem.quantity;

      if (searchItem.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export function getCart(store) {
  return store.cart.cart;
}

export function getTotalCartPrice(store) {
  return store.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);
}

export function getTotalCartQuantity(store) {
  return store.cart.cart.reduce((acc, item) => acc + item.quantity, 0);
}

export function getQuantityById(pizzaId) {
  return function (store) {
    return store.cart.cart.find((item) => item.pizzaId === pizzaId)?.quantity;
  };
}
