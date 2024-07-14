import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
import { loadingReducer } from "./loading/loadingSlice";
import { shopsReducer } from "./shops/shopSlise";

const persistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token", "refreshToken", "expireTime"],
};
const persistConfigShops = {
  key: "shops",
  version: 1,
  storage,
  whitelist: ["shop"],
};
const persistedReducer = persistReducer(persistConfig, authReducer);
const persistedReducerShops = persistReducer(persistConfigShops, shopsReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    shops: persistedReducerShops,
    loading: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
