import { createSlice } from "@reduxjs/toolkit";
import {
  addCatalogProductThunk,
  addProductThunk,
  deleteProductThunk,
  editProductThunk,
} from "./operations";

const productSlice = createSlice({
  name: "products",
  initialState: {
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(addProductThunk.fulfilled, (state) => {
        state.error = null;
      })
      .addCase(addProductThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(addCatalogProductThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(addCatalogProductThunk.fulfilled, (state) => {
        state.error = null;
      })
      .addCase(addCatalogProductThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(editProductThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(editProductThunk.fulfilled, (state) => {
        state.error = null;
      })
      .addCase(editProductThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(deleteProductThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteProductThunk.fulfilled, (state) => {
        state.error = null;
      })
      .addCase(deleteProductThunk.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const productsReducer = productSlice.reducer;
