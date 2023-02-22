import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFilterOpen: false,
  rateBy: null,
  sortBy: null,
  categories: [],
  searchBy: null,
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
    clearAllFilters: (state) => {
      (state.rateBy = null),
        (state.sortBy = null),
        (state.categories = []),
        (state.searchBy = null),
        (state.showFastDeliveryOnly = false),
        (state.showCodOnly = false);
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
  categorize
} = filterSlice.actions;

export default filterSlice.reducer;
