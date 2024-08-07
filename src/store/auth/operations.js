import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, clearToken, setToken } from "../../api/api";

export const signUpThunk = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("user/register", body);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const signInThunk = createAsyncThunk(
  "auth/signIn",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("user/login", body);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const currentThunk = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      if (token) {
        setToken(token);
      } else {
        return thunkAPI.rejectWithValue("Token is not exist");
      }
      const { data } = await api("user/user-info");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.post("user/logout");
      clearToken();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const refreshTokensThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const refreshToken = thunkAPI.getState().auth.refreshToken;

      if (refreshToken) {
        setToken(refreshToken);
      } else {
        return thunkAPI.rejectWithValue("Refresh token does not exist");
      }

      const { data } = await api("user/refreshCurrent");
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
