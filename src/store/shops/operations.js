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
      // delete data.password;
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
    // console.log(body);
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
      const data = await api(`shop/own`);
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
      const data = await api(`shop/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
