import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const BasketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
  },
  reducers: {
    addtoBasket: (state, action) => {
      state.basket = [...action.payload.basket, action.payload.elem];
      localStorage.setItem(
        "basket",
        JSON.stringify([...action.payload.basket, action.payload.elem])
      );
    },
    increaseCountFromHomePage: (state, action) => {
      action.payload.basket[action.payload.Index].count++;
      state.basket = action.payload.basket;
      localStorage.setItem("basket", JSON.stringify(action.payload.basket));
    },
    increaseCountFromBasketPage: (state, action) => {
      action.payload.basketLocal[action.payload.Index].count++;
      state.basket = action.payload.basketLocal;
      localStorage.setItem(
        "basket",
        JSON.stringify(action.payload.basketLocal)
      );
    },
    decreaseCountFromBasketPage: (state, action) => {
      if (action.payload.basketLocal[action.payload.Index].count <= 1) {
        action.payload.basketLocal = action.payload.basketLocal.filter(
          (x) => x._id != action.payload.id
        );
        state.basket = action.payload.basketLocal;
        localStorage.setItem(
          "basket",
          JSON.stringify(action.payload.basketLocal)
        );
      } else {
        action.payload.basketLocal[action.payload.Index].count--;
        state.basket = action.payload.basketLocal;
        localStorage.setItem(
          "basket",
          JSON.stringify(action.payload.basketLocal)
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addtoBasket,
  increaseCountFromHomePage,
  increaseCountFromBasketPage,
  decreaseCountFromBasketPage,
} = BasketSlice.actions;

export default BasketSlice.reducer;
