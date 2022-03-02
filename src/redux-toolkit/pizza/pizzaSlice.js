import { createSlice } from "@reduxjs/toolkit";

export const PizzaSlice = createSlice({
  name: "pizza",

  initialState: {
    value: 0
  },
  reducers: {
    increase: state => {
        state.value += 1;
    },
    decrease: state => {
        state.value -= 1;
    }
  },
});

export const {increase, decrease} = PizzaSlice.actions;
export default PizzaSlice.reducer;