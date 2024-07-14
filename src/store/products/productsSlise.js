import { createSlice } from "@reduxjs/toolkit";
import { addCatalogProductThunk, addProductThunk } from "./operations";

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
      });
  },
});

export const productsReducer = productSlice.reducer;
