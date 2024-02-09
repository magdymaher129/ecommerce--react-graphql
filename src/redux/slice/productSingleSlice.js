// productSingleSlice.js
import { createSlice } from '@reduxjs/toolkit';


const productSingleSlice = createSlice({
  name: 'productSingle',
  initialState: {
    data:{},
    loading: false,
    error: null,
  },
  reducers: {
    setProductSingle(state, action) {
      state.data= action.payload;
    },
    setProductLoading(state, action) {
      state.loading = action.payload;
    },
    setProductError(state, action) {
      state.error = action.payload;
    },
    
  },
});

export const { setProductSingle, setProductLoading, setProductError } = productSingleSlice.actions;

export const selectProduct = (state) => state.productSingle;

export default productSingleSlice.reducer;