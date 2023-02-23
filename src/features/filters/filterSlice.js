import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFilterOpen: false,
  rateBy: null,
  sortBy: null,
  categories: [],
  searchQuery: '',
  showFastDeliveryOnly: false,
  showCodOnly: false,
  price: 4000
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFilters: (state) => {
      state.isFilterOpen = !state.isFilterOpen;
    },
    showCod: (state) => {
      state.showCodOnly = !state.showCodOnly;
    },
    showFastDelivery: (state) => {
      state.showFastDeliveryOnly = !state.showFastDeliveryOnly;
    },
    sortProducts: (state, action) => {
      state.sortBy = action.payload;
    },
    categorizeProducts: (state, action) => {
      const selectedOption = action.payload.selectedOption;
      state.categories = action.payload.isChecked
        ? [...state.categories, selectedOption]
        : state.categories.filter((category) => category !== selectedOption);
    },
    categorize: (state, action) => {
      const selectedOption = action.payload.selectedOption;
      state.categories = [selectedOption];
    },
    filterByRating: (state, action) => {
      state.rateBy = action.payload;
    },
    priceFilter: (state, action) => {
      const price = action.payload;
      state.price = price;
    },
    searchFilter: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearAllFilters: (state) => {
      (state.rateBy = null),
        (state.sortBy = null),
        (state.categories = []),
        (state.searchQuery = ''),
        (state.showFastDeliveryOnly = false),
        (state.showCodOnly = false),
        (state.price = 4000);
    }
  }
});

export const {
  toggleFilters,
  showCod,
  showFastDelivery,
  clearAllFilters,
  sortProducts,
  categorizeProducts,
  filterByRating,
  categorize,
  priceFilter,
  searchFilter
} = filterSlice.actions;

export default filterSlice.reducer;
