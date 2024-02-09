// productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    data:{},
    meta:{},
    loading: false,
    error: null,
    current: [],
    cat:[],
    color:[],
    size:[],
   
  },
  reducers: {
    setProductData(state, action) {
      state.data= action.payload;
    },
    setMetaData(state, action) {
      state.meta= action.payload;
    },
    setProductLoading(state, action) {
      state.loading = action.payload;
    },
    setProductError(state, action) {
      state.error = action.payload;
    },
    getAllProducts: (state, action) => {
      state.products = action.payload;
      state.current = state.products;
    },

    getMetaProducts: (state, action) => {
      state.meta = action.payload;
   
    },
 
    fileredProduct: (state, action) => {
      if (action.payload > 0) {
        state.products = state.products.filter((p) => p.id > action.payload);
      } else {
        state.products = state.current;
      }
    },
    filteredProductByPrice: (state, action) => {
      if (action.payload > 0) {
        state.products = state.products.filter(
          (p) => p.attributes.price > action.payload,
        );
      } else {
        state.products = state.current;
      }
    },
    filteredProductByCateory: (state, action) => {
     
      if (action.payload > 0) {
        state.products = state.products.filter(
          (p) => p.attributes.categories.data[0].id === action.payload,
        );  
      } else {
        state.products = state.current;
      }
    },
    filteredProductByBrand: (state, action) => {
      if (action.payload > 0) {
        state.products = state.products.filter(
          (p) => p.attributes.brands?.data[0]?.id === action.payload,
          
        );
      } else {
        state.products = state.current;
      }
    },
    filteredProductByColor: (state, action) => {
  
      if (action.payload > 0) {
        state.products = state.products.filter(
          (p) => p.attributes.colors?.data[0]?.id === action.payload,
        );
      } else {
        state.products = state.current;
      }
    },
    filteredProductBySize: (state, action) => {
      if (action.payload > 0) {
        state.products = state.products.filter(
          (p) => p.attributes.sizes?.data[0]?.id === action.payload,
        );
      } else {
        state.products = state.current;
      }
    },
  },
});

export const { setProductData,setMetaData, setProductLoading, setProductError,

  getAllProducts,
  fileredProduct,
  filteredProductByPrice,
  filteredProductByCateory,
  filteredProductByBrand,
  filteredProductByColor,
  filteredProductBySize,
  getMetaProducts } = productSlice.actions;

export const selectProduct = (state) => state.product;

export default productSlice.reducer;