// colorSlice.js

import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    data: [],
    loading: false,
    error: null,
    color: [],
    current: [],
    colorSelected: [],
    colorID:[],
  },
  reducers: {
    setColorData(state, action) {
      state.data = action.payload;
    },
    setColorLoading(state, action) {
      state.loading = action.payload;
    },
    setColorError(state, action) {
      state.error = action.payload;
    },
    getAllColors: (state, action) => {
      state.color = action.payload;
      state.current = state.color;
    },
    getColorSelected:(state, action) => {
      state.colorSelected = action.payload;
     
    },
    getColorID: (state, action) => {
      state.colorID = action.payload;
    },
  },
});

export const { setColorData, setColorLoading, setColorError,getAllColors,getColorSelected,getColorID } = colorSlice.actions;

export const selectColor = (state) => state.color;

export default colorSlice.reducer;


