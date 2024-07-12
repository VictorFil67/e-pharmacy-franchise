import { createSlice } from "@reduxjs/toolkit";
import {
  createShopThunk,
  editShopThunk,
  getAllProductsThunk,
  getShopIdThunk,
  getShopProductsThunk,
  getShopThunk,
} from "./operations";

const shopsSlice = createSlice({
  name: "shops",
  initialState: {
    shop: null,
    shopProducts: [],
    allProducts: [],
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
      })
      .addCase(getShopProductsThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(getShopProductsThunk.fulfilled, (state, { payload }) => {
        state.shopProducts = payload;
      })
      .addCase(getShopProductsThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(getAllProductsThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(getAllProductsThunk.fulfilled, (state, { payload }) => {
        state.allProducts = payload;
      })
      .addCase(getAllProductsThunk.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const shopsReducer = shopsSlice.reducer;
