import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const encodedToken = localStorage.getItem('ENCODED_TOKEN');

const initialState = {
  status: 'idle',
  products: [],
  singleProduct: {},
  cartItems: [],
  totalCartPrice: 0,
  wishlistItems: [],
  categories: []
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const res = await fetch('/api/products');
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.response.data);
  }
});

export const fetchSingleProduct = createAsyncThunk(
  '/products/fetchSingleProduct',
  async (action) => {
    try {
      const productId = action._id;
      const res = await fetch(`/api/products/${productId}`);
      const data = await res.json();
      return data;
    } catch (e) {
      console.log(e.response.data);
    }
  }
);

export const fetchCategories = createAsyncThunk('/products/categories', async () => {
  try {
    const res = await fetch('/api/categories');
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.response.data);
  }
});

export const fetchCartItems = createAsyncThunk('/products/fetchCartItems', async () => {
  try {
    const res = await fetch('/api/user/cart', { headers: { authorization: encodedToken } });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.response.data);
  }
});

export const fetchWishlistItems = createAsyncThunk('/products/fetchWishlistItems', async () => {
  try {
    const res = await fetch('/api/user/wishlist', { headers: { authorization: encodedToken } });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.response.data);
  }
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCartButtonClicked: (state, action) => {
      try {
        axios.post('/api/user/cart', action.payload, { headers: { authorization: encodedToken } });
        state.cartItems = [...state.cartItems, action.payload];
        state.totalCartPrice += Number(action.payload.discountedPrice);
      } catch (e) {
        console.log(e.response.data);
      }
    },
    addToWishlistButtonClicked: (state, action) => {
      try {
        axios.post('/api/user/wishlist', action.payload, {
          headers: { authorization: encodedToken }
        });
        state.wishlistItems = [...state.wishlistItems, action.payload];
      } catch (e) {
        console.log(e.response.data);
      }
    },
    deleteCartButtonClicked: (state, action) => {
      try {
        const productId = action.payload._id;
        axios.delete(`/api/user/cart/${productId}`, { headers: { authorization: encodedToken } });
        const productIndex = state.cartItems.findIndex((product) => product._id === productId);
        const currentProductQuantity = state.cartItems[productIndex].quantity;
        state.cartItems = state.cartItems.filter((item) => item._id !== productId);
        state.totalCartPrice =
          state.totalCartPrice -
          Number(action.payload.discountedPrice) * Number(currentProductQuantity);
      } catch (e) {
        console.log(e.response.data);
      }
    },
    deleteWishlistButtonClicked: (state, action) => {
      try {
        const productId = action.payload._id;
        axios.delete(`/api/user/wishlist/${productId}`, {
          headers: { authorization: encodedToken }
        });
        state.wishlistItems = state.wishlistItems.filter((item) => item._id !== productId);
      } catch (e) {
        console.log(e.response.data);
      }
    },
    incrementCartQuantity: (state, action) => {
      try {
        const productId = action.payload._id;
        axios.post(
          `/api/user/cart/${productId}`,
          {
            action: {
              type: 'increment'
            }
          },
          { headers: { authorization: encodedToken } }
        );
        const productIndex = state.cartItems.findIndex((product) => product._id === productId);
        state.cartItems[productIndex].quantity += 1;
        state.totalCartPrice += Number(action.payload.discountedPrice);
      } catch (e) {
        console.log(e.response.data);
      }
    },
    decrementCartQuantity: (state, action) => {
      try {
        const productId = action.payload._id;
        axios.post(
          `/api/user/cart/${productId}`,
          {
            action: {
              type: 'decrement'
            }
          },
          { headers: { authorization: encodedToken } }
        );
        const productIndex = state.cartItems.findIndex((product) => product._id === productId);
        state.cartItems[productIndex].quantity -= 1;
        state.totalCartPrice -= Number(action.payload.discountedPrice);
      } catch (e) {
        console.log(e.response.data);
      }
    },
    resetUserData: (state) => {
      state.cartItems = [];
      state.wishlistItems = [];
    }
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload.products;
      state.status = 'fulfilled';
    },
    [fetchSingleProduct.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchSingleProduct.fulfilled]: (state, action) => {
      state.singleProduct = action.payload.product;
      state.status = 'fulfilled';
    },
    [fetchCartItems.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchCartItems.fulfilled]: (state, action) => {
      state.cartItems = action.payload.cart;
      state.status = 'fulfilled';
    },
    [fetchWishlistItems.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchWishlistItems.fulfilled]: (state, action) => {
      state.wishlistItems = action.payload.wishlist;
      state.status = 'fulfilled';
    },
    [fetchCategories.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action.payload.categories;
      state.status = 'fulfilled';
    }
  }
});

export const {
  addToCartButtonClicked,
  addToWishlistButtonClicked,
  deleteCartButtonClicked,
  deleteWishlistButtonClicked,
  incrementCartQuantity,
  decrementCartQuantity,
  resetUserData
} = productSlice.actions;

export default productSlice.reducer;
