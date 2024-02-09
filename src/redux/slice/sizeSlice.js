// sizeSlice.js

import { createSlice } from '@reduxjs/toolkit';

const sizeSlice = createSlice({
  name: 'size',
  initialState: {
    data: null,
    loading: false,
    error: null,
    size: [],
    current: [],
    sizeSelected: [],
    sizeID:[],
  },
  reducers: {
    setSizeData(state, action) {
      state.data = action.payload;
    },
    setSizeLoading(state, action) {
      state.loading = action.payload;
    },
    setSizeError(state, action) {
      state.error = action.payload;
    },

  getAllsizes: (state, action) => {
    state.size = action.payload;
    state.current = state.size;
  },
  getSizeSelected:(state, action) => {
    state.sizeSelected = action.payload;
   
  },
  getSizeID: (state, action) => {
    state.sizeID = action.payload;
  },
}
});

export const {setSizeData, setSizeLoading, setSizeError ,  getAllsizes , getSizeSelected , getSizeID} = sizeSlice.actions;

export const selectSize = (state) => state.size;

export default sizeSlice.reducer;