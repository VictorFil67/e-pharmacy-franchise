import { createSlice } from "@reduxjs/toolkit";
import { getClientGoodsThunk, getStatisticsThunk } from "./operations";

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: {
    error: null,
    statistics: null,
    clientProducts: [],
    clientInfo: null,
  },
  reducers: {
    setClientInfo(state, { payload }) {
      state.clientInfo = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStatisticsThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(getStatisticsThunk.fulfilled, (state, { payload }) => {
        state.statistics = payload;
        state.error = null;
      })
      .addCase(getStatisticsThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(getClientGoodsThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(getClientGoodsThunk.fulfilled, (state, { payload }) => {
        state.clientProducts = payload;
        state.error = null;
      })
      .addCase(getClientGoodsThunk.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const statisticsReducer = statisticsSlice.reducer;
export const { setClientInfo } = statisticsSlice.actions;
