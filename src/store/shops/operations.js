import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const createShopThunk = createAsyncThunk(
  "shop/create",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("shop/create", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
