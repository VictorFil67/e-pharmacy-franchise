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
import { productsReducer } from "./products/productsSlise";

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
const persistConfigProducts = {
  key: "products",
  version: 1,
  storage,
  whitelist: ["product"],
};
const persistedReducer = persistReducer(persistConfig, authReducer);
const persistedReducerShops = persistReducer(persistConfigShops, shopsReducer);
const persistedReducerProducts = persistReducer(
  persistConfigProducts,
  productsReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    shops: persistedReducerShops,
    products: persistedReducerProducts,
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
