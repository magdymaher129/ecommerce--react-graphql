import { useDispatch, useSelector } from "react-redux";
import {
  setData,
  setError,
  setLoading,
  setMetaCategory,
} from "../../redux/slice/categorySlice";
import { useQuery } from "@apollo/client";
import {
  setBrandData,
  setMetaBrand,
  setBrandError,
  setBrandLoading,
} from "../../redux/slice/brandSlice";
import GET_Colors from "../../AdminComponents/gql/colors/getColors";
import {
  setColorData,
  setColorError,
  setColorLoading,
} from "../../redux/slice/colorSlice";
import GET_Sizes from "../../AdminComponents/gql/sizes/getSizes";
import {
  setSizeData,
  setSizeError,
  setSizeLoading,
} from "../../redux/slice/sizeSlice";
import { GET_PRODUCTS } from "../../AdminComponents/gql/getProducts";
import {
  setProductData,
  setMetaData,
  setProductError,
  setProductLoading,
} from "../../redux/slice/productSlice";
import GET_BRAND_BY_PAGE from "../../AdminComponents/gql/brands/getBrandByPage";
import GET_Category_BY_PAGE from "../../AdminComponents/gql/category/getCategorybyPage";
import { useEffect } from "react";



function useInit() {
    const dispatch = useDispatch();
    const pageSize = useSelector((state) => state.pagination.pageSize);
    const currentPage = useSelector((state) => state.pagination.page);
    
    const catSize = useSelector((state) => state.pagination.catSize);
    const  currentCatPage  = useSelector((state) => state.pagination.catPage);
  
    const brandSize = useSelector((state) => state.pagination.brandSize);
    const  currentBrandPage= useSelector((state) => state.pagination.brandPage);
    
    
    
    
    
    const {
      data: category,
      loading,
      error,
    } = useQuery(GET_Category_BY_PAGE, {
      variables: { pageSize: catSize, page: currentCatPage },
    });
    const {
      data: brand,
      loading: loadingBrand,
      error: errorBrand,
    } = useQuery(GET_BRAND_BY_PAGE, {
      variables: { pageSize: brandSize, page: currentBrandPage },
    });
  
    const {
      data: dataColor,
      loading: loadingColors,
      error: errorColors,
    } = useQuery(GET_Colors);
    const {
      data: dataSize,
      loading: loadingSizes,
      error: errorSizes,
    } = useQuery(GET_Sizes);
    // const[count,setCount] = useState(0);
    const {
      data: dataProduct,
      loading: loadingProducts,
      error: errorProducts,
    } = useQuery(GET_PRODUCTS, {
      variables: { pageSize: pageSize, page: currentPage },
    });
console.log("dataProduct", dataProduct)
    // const {
    //   data: dataProduct,
    //   loading: loadingProducts,
    //   error: errorProducts,}
    //  = useMyProduct(id, color, size, fields, limit, num)
      




  
    useEffect(() => {
      if (category) {
        dispatch(setData(category.categories.data)); // Dispatch action to set data in Redux store
        dispatch(setMetaCategory(category.categories.meta.pagination));
        dispatch(setLoading(loading)); // Dispatch action to set loading status
        dispatch(setError(error)); // Dispatch action to set error status
      }
  
      if (brand) {
        dispatch(setBrandData(brand.brands.data)); // Dispatch action to set data in Redux store
        dispatch(setMetaBrand(brand.brands.meta.pagination));
        dispatch(setBrandLoading(loadingBrand)); // Dispatch action to set loading status
        dispatch(setBrandError(errorBrand)); // Dispatch action to set error status
      }
      if (dataColor) {
        dispatch(setColorData(dataColor.colors.data)); // Dispatch action to set data in Redux store
        dispatch(setColorLoading(loadingColors)); // Dispatch action to set loading status
        dispatch(setColorError(errorColors)); // Dispatch action to set error status
      }
      if (dataSize) {
        dispatch(setSizeData(dataSize.sizes.data)); // Dispatch action to set data in Redux store
        dispatch(setSizeLoading(loadingSizes)); // Dispatch action to set loading status
        dispatch(setSizeError(errorSizes)); // Dispatch action to set error status
      }
      if (dataProduct) {
        dispatch(setProductData(dataProduct.products)); // Dispatch action to set data in Redux store
        dispatch(setMetaData(dataProduct.products.meta.pagination));
        dispatch(setProductLoading(loadingProducts)); // Dispatch action to set loading status
        dispatch(setProductError(errorProducts)); // Dispatch action to set error status
      }
  
      // console.log("dataProduct", dataProduct.products.data);
    }, [
      dispatch,
      category,
      loading,
      error,
   
      dataColor,
      dataSize,
      dataProduct,
    ]);

  //  const{data}= useMyProduct(id, color, size, fields, limit, num)
    return {category,dataColor,dataSize,dataProduct}

}
export default useInit