// paginationSlice.js

import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "paginate",
  initialState: {
    pageSize: 6,
    catSize: 5,
    brandSize: 5,
    page: 1,
    catPage: 1,
    brandPage: 1,
  },

  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setCatPage(state, action) {
      state.catPage = action.payload;
    },
    setBrandPage(state, action) {
      state.brandPage = action.payload;
    },

    // increment page
    setPageIncrement(state, action) {
      state.page = state.page + 1;
    },
    setCatIncrement(state, action) {
      state.catPage = state.catPage + 1;
    },

    setBrandIncrement(state, action) {
      state.brandPage = state.brandPage + 1;
    },

    // deccrement page
    setPageDecrement(state, action) {
      state.page = state.page - 1;
    },
    setCatDecrement(state, action) {
      state.catPage = state.catPage - 1;
    },
    setBrandDecrement(state, action) {
      state.brandPage = state.brandPage - 1;
    },

    // set page size
    setPageSize(state, action) {
      state.pageSize = action.payload;
    },
    setCatSize(state, action) {
      state.catSize = action.payload;
    },
    setBrandSize(state, action) {
      state.brandSize = action.payload;
    },
  },
});

export const {
  setPage,
  setCatPage,
  setBrandPage,

  setPageIncrement,
  setCatIncrement,
  setBrandIncrement,
  setPageDecrement,
  setCatDecrement,
  setBrandDecrement,
  setPageSize,
  setCatSize,
  setBrandSize,
} = paginationSlice.actions;

export const selectProduct = (state) => state.pagination;

export default paginationSlice.reducer;
