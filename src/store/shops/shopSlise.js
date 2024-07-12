import { createSlice } from "@reduxjs/toolkit";
import {
  createShopThunk,
  editShopThunk,
  getShopIdThunk,
  getShopThunk,
} from "./operations";

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
      })
      .addCase(getShopThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(getShopThunk.fulfilled, (state, { payload }) => {
        state.shop = payload;
      })
      .addCase(getShopThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(getShopIdThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(getShopIdThunk.fulfilled, (state, { payload }) => {
        state.shop = payload;
      })
      .addCase(getShopIdThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.shop = null;
      });
  },
});

export const shopsReducer = shopsSlice.reducer;
