import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: [],
  current: [],
  colorSelected: [],
  colorID:[],
};

const SelectedcolorSlice = createSlice({
  name: "SelectedColor",
  initialState,
  reducers: {
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
export const { getAllColors,getColorSelected,getColorID } = SelectedcolorSlice.actions;
export default SelectedcolorSlice.reducer;
