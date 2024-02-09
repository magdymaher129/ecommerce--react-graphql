import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  current: [],
  categorySelected: [],
  meta:{},
  categoryID:[],
};
const SelectedCategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
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
    setMetaCategory(state, action) {
      state.meta= action.payload;
    },
  },
});

export const { getAllCategories, getCategorySelected,getCategoryID } = SelectedCategorySlice.actions;
export default SelectedCategorySlice.reducer;