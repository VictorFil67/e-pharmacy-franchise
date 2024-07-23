import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const getStatisticsThunk = createAsyncThunk(
  "statistics/getStatistics",
  async (_, thunkAPI) => {
    try {
      const { data } = await api(`statistics`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const getClientGoodsThunk = createAsyncThunk(
  "statistics/getClientGoods",
  async (clientId, thunkAPI) => {
    try {
      const { data } = await api(`statistics/${clientId}/goods`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
