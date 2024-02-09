// brandSlice.js

import { createSlice } from "@reduxjs/toolkit";

const brandSlice = createSlice({
  name: "brand",
  initialState: {
    data:[],
    meta:null,
    loading: false,
    error: null,
  },
  reducers: {
    setBrandData(state, action) {
      state.data = action.payload;
    },
    setMetaBrand(state, action) {
      state.meta= action.payload;
    },
    setBrandLoading(state, action) {
      state.loading = action.payload;
    },
    setBrandError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setBrandData, setMetaBrand,setBrandLoading, setBrandError } =
  brandSlice.actions;

export const selectBrand = (state) => state.brand;

export default brandSlice.reducer;
