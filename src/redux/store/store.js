import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slice/categorySlice"; // Import your category reducer
import brandReducer from "../slice/brandSlice";
import colorReducer from "../slice/colorSlice";
import sizeReducer from "../slice/sizeSlice";
import productReducer from "../slice/productSlice";
import paginationSlice from "../slice/paginationSlice";
import productSingleSlice from "../slice/productSingleSlice";
import SelectedcolorReducer from "../slice/selectedColorSlice";
import SelectedSizeReducer from "../slice/selectedSizeSlice";
import SelectedCategoryReducer from "../slice/SelectedCategorySlice";
const store = configureStore({
  reducer: {
    category: categoryReducer, // Add your category reducer to the store
    brand: brandReducer,
    color: colorReducer,
    // SelectedColor:SelectedcolorReducer,
    // SelectedSize:SelectedSizeReducer,
    // SelectedCategory:SelectedCategoryReducer,
    size: sizeReducer,
    product: productReducer,
    pagination: paginationSlice,
    productSingle: productSingleSlice,
    // Add other reducers if you have more
  },
});
export default store;
