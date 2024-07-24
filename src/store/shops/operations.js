import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const createShopThunk = createAsyncThunk(
  "shop/create",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("shop/create", body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const editShopThunk = createAsyncThunk(
  "shop/edit",
  async ({ id, formData }, thunkAPI) => {
    try {
      const { data } = await api.put(`shop/${id}/update`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const getShopIdThunk = createAsyncThunk(
  "shop/getShopId",
  async (_, thunkAPI) => {
    try {
      const { data } = await api(`shop/own`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const getShopThunk = createAsyncThunk(
  "shop/getShopInfo",
  async (id, thunkAPI) => {
    try {
      const { data } = await api(`shop/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const getAllProductsThunk = createAsyncThunk(
  "shop/getAllProducts",
  async ({ category, q, page = 1, limit = 8 }, thunkAPI) => {
    console.log(category);
    try {
      const { data } = await api(`shop/all/products`, {
        params: { category, q, page, limit },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const getShopProductsThunk = createAsyncThunk(
  "shop/getShopProducts",
  async ({ id, page = 1, limit = 8 }, thunkAPI) => {
    console.log(page, limit);
    try {
      const { data } = await api(`shop/${id}/product`, {
        params: { page, limit },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
