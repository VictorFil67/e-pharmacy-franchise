import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  currentThunk,
  logoutThunk,
  refreshTokensThunk,
  signInThunk,
  signUpThunk,
} from "../auth/operations";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          signUpThunk.pending,
          signInThunk.pending,
          currentThunk.pending,
          logoutThunk.pending,
          refreshTokensThunk.pending
        ),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.fulfilled,
          signInThunk.fulfilled,
          currentThunk.fulfilled,
          logoutThunk.fulfilled,
          refreshTokensThunk.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.rejected,
          signInThunk.rejected,
          currentThunk.rejected,
          logoutThunk.rejected,
          refreshTokensThunk.rejected
        ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const loadingReducer = loadingSlice.reducer;
