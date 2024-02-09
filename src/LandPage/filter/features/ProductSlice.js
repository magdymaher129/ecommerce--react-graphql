import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
  current: [],
  cat:[],
  color:[],
  size:[],
  meta:{}
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
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

export const {
  getAllProducts,
  fileredProduct,
  filteredProductByPrice,
  filteredProductByCateory,
  filteredProductByBrand,
  filteredProductByColor,
  filteredProductBySize,
  getMetaProducts
} = productSlice.actions;

export default productSlice.reducer;
