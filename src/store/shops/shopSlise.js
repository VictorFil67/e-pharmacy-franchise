import { createSlice } from "@reduxjs/toolkit";
import { createShopThunk } from "./operations";

const shopsSlice = createSlice({
  name: "shops",
  initialState: {
    shop: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createShopThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(createShopThunk.fulfilled, (state, { payload }) => {
        state.shop = payload;
      })
      .addCase(createShopThunk.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const shopsReducer = shopsSlice.reducer;
