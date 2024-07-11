import { createSlice } from "@reduxjs/toolkit";
import { createShopThunk, editShopThunk } from "./operations";

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
      })
      .addCase(editShopThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(editShopThunk.fulfilled, (state, { payload }) => {
        state.shop = payload;
      })
      .addCase(editShopThunk.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const shopsReducer = shopsSlice.reducer;
