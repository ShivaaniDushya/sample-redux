import { configureStore } from "@reduxjs/toolkit";
import pizzaCountReducer from "./pizzaSlice";

export default configureStore({
  reducer: {
    pizzaCount: pizzaCountReducer,
  },
});