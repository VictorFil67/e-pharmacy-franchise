import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const addProductThunk = createAsyncThunk(
  "product/addProduct",
  async ({ id, body }, thunkAPI) => {
    try {
      const { data } = await api.post(`/shop/${id}/product/add`, body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const addCatalogProductThunk = createAsyncThunk(
  "product/addCatalogProduct",
  async ({ shopId, productId }, thunkAPI) => {
    try {
      const { data } = await api.put(
        `/shop/${shopId}/product/${productId}/add`
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
