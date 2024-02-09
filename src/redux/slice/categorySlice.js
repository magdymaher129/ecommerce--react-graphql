// categorySlice.js

import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    data: {},
    meta:{},
    loading: false,
    error: null,
    category: [],
    current: [],
    categorySelected: [],

    categoryID:[],
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setMetaCategory(state, action) {
      state.meta= action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    getAllCategories: (state, action) => {
      state.category = action.payload;
      state.current = state.category;
    },
    getCategorySelected: (state, action) => {
      state.categorySelected = action.payload;
    },
    getCategoryID: (state, action) => {
      state.categoryID = action.payload;
    },
  },
});

export const { setData, setMetaCategory,setLoading, setError,getAllCategories, getCategorySelected,getCategoryID } = categorySlice.actions;

export const selectCategory = (state) => state.category;

export default categorySlice.reducer;


