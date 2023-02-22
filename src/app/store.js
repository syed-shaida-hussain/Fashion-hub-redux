import { configureStore } from '@reduxjs/toolkit';
// import productReducer from '../features/products/productSlice';
import authReducer from '../features/auth/authSlice';
// import filterReducer from '../features/filters/filterSlice';
export const store = configureStore({
  reducer: { auth: authReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
