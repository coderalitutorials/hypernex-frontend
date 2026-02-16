






import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../auth/authApi";
import authReducer from "../auth/authSlice";
import { blogsApi } from "../features/blogs/blogsApi";
import { offersApi } from "../features/offers/offersApi"; // 👈 import offersApi
import { categoriesApi } from "../features/categories/categoriesApi";
import { uploadApi } from "../features/upload/uploadApi";
import { contactApi } from "../features/contacts/contactApi";
import { subscriberApi } from "../features/subscriber/subscriberApi";
import { emailApi } from "../email/emailApi";
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
import storage from "redux-persist/lib/storage"; // localStorage

// --- Persist Config for auth ---
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "token", "isAuthenticated"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    [authApi.reducerPath]: authApi.reducer,
    [offersApi.reducerPath]: offersApi.reducer, // 👈 add offersApi reducer
    [blogsApi.reducerPath]: blogsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [uploadApi.reducerPath]: uploadApi.reducer,
    [emailApi.reducerPath]: emailApi.reducer,
    [subscriberApi.reducerPath]: subscriberApi.reducer,
    
  // 👇 CONTACT API
  [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, offersApi.middleware, blogsApi.middleware,  categoriesApi.middleware , uploadApi.middleware, contactApi.middleware, emailApi.middleware, subscriberApi.middleware), // 👈 add offersApi middleware
});

export const persistor = persistStore(store);

export default store;
