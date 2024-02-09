import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    size: [],
    current: [],
    sizeSelected: [],
    sizeID:[],
  };

const selectedSizeSlice = createSlice({
    name: 'size',
    initialState,
    reducers:{
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
        },
      });
      export const { getAllsizes,getSizeSelected,getSizeID } = selectedSizeSlice.actions;
      export default selectedSizeSlice.reducer;