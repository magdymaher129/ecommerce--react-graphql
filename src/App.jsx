import "bootstrap/dist/css/bootstrap.min.css";
// import NavHeader from "./navHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";

import AdminAddItem from "./AdminComponents/jsx/AdminAddItem";
import AddCategories from "./AdminComponents/jsx/categories/AddCategories";
import AddBrands from "./AdminComponents/jsx/Brands/AddBrands";
import AddProducts from "./AdminComponents/jsx/Products/AddProducts";
import CategoryUpdate from "./AdminComponents/jsx/categories/CategoryUpdate";
import BrandUpdate from "./AdminComponents/jsx/Brands/BrandUpdate";
import ProductUpdate from "./AdminComponents/jsx/Products/ProductUpdate";
import Panel from "./AdminComponents/panel/Panel";
import ProductPanel from "./AdminComponents/panel/ProductPage";
import CategoryPanel from "./AdminComponents/panel/CategoryPanel";
import BrandPanel from "./AdminComponents/panel/BrandPanel";
// import useInits from "./AdminComponents/hooks/useInit";
import HomePage from "./LandPage/jsx/HomePage";

import NavTop from "./LandPage/jsx/NavTop";
import SingleProduct from "./LandPage/jsx/SingleProduct";
import  ShoppingCart from "./shopping components/jsx/ShoppingCart"
// import usePlainProducts from "./LandPage/Hooks/usePlainProducts";
import { useSelector } from "react-redux";
import { gql, useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "./LandPage/filter/gql/getProducts";
import { isArray } from "@apollo/client/utilities";
// import { setBrandError } from "./redux/slice/brandSlice";
import Login from "./Auth/auth/jsx/Login";
import PrivateRoutes from "./Auth/auth/jsx/ProtectedRoute"

import Error from "./Auth/auth/jsx/Error"
import AuthContext, { AuthProvider } from "./Auth/auth/context/authContext";
import SignUp from "./Auth/auth/jsx/SignUp";
// import HomePage from "./pages/HomePage";
// import useAllProducts from "./filter/services/useAllProducts";
// import useInit from "./components/products/hooks/useInit";


export const productContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
const ROLES = {
  'User': 4,
  'Editor': 1,
  'Admin': 3
}



const App = () => {
//  usePlainProducts()

const page =useSelector(state=>state.pagination.page)
//  const page=1
const pageSize=6

//  console.log("cat",catID)






 // create categoryID of All category // 
 // category 
const catSelected=useSelector(state=>state.category?.categorySelected)
const cat=useSelector(state=>state.category?.data)
const catID=isArray(cat) &&cat.map(c=>c?.id)
 // create categoryID of All category // 

let mainCat=[]
 // fill mainCat of selected category // 
if(catSelected.length===0){
  mainCat=catID
}else{
  mainCat=catSelected
}
 // fill mainCat of selected category // 

 // create colorID of All colors // 
 const colorSelected=useSelector(state=>state.color?.colorSelected)
 const colors=useSelector(state=>state.color?.data)
const colorsID=colors.map(c=>c?.id)
  // create colorID of All colors // 



 // fill mainColor of selected colors // 
 let mainColor=[]
 if(colorSelected.length===0){
  mainColor=colorsID
}else{
  mainColor=colorSelected
}
  // fill mainColor of selected colors // 

 // create sizeID of All sizes // 
 const sizeSelected=useSelector(state=>state.size?.sizeSelected)
 const sizes=useSelector(state=>state.size?.data)
 const sizesID=sizes?.map(c=>c?.id)
  // create colorID of All sizes //

 // fill mainSize of selected size // 
 let mainSize=[]
 if(sizeSelected.length===0){
  mainSize=colorsID
}else{
  mainSize=sizeSelected
}
  // fill mainSize of selected size // 

const {data:products,loading,error}= useQuery(GET_PRODUCTS,{variables:{
catt:mainCat,color:mainColor,size:mainSize,pageSize:pageSize,page:page
    }})






  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const itemValue = {
    color,
    setColor,
    size,
    setSize,
  };

//  useInits()

  return (
    <productContext.Provider value={itemValue}>
  <AuthProvider>
    <BrowserRouter >
<NavTop/>
        <Routes>

     <Route exact path='/' element={<HomePage  products={products} page={page} />}/>
        <Route path='/product/:id' element={<SingleProduct />}/>
        {/* <Route path='/shoppingcart' element={<ShoppingCart />}/> */}
       {/* <Route path='/panel' element={<Panel />} /> */}

          <Route path='/product' element={<ProductPanel />} />
          <Route path='/category' element={<CategoryPanel />} />
          <Route path='/brand' element={<BrandPanel />} />
          <Route path='/additem' element={<AdminAddItem />} />
          <Route path='/addcat' element={<AddCategories />} />
          <Route path='/addbrand' element={<AddBrands />} />
          <Route path='/updatecat/:id' element={<CategoryUpdate />} />
          <Route path='/updatebrand/:id' element={<BrandUpdate />} />
          <Route path='/updateproduct/:id' element={<ProductUpdate />} />
          <Route path='/addproduct' element={<AddProducts />} />


   {/* public routes */}

   <Route path="/login" element={<Login />} />
   <Route path="/signup" element={<SignUp />} />
     {/* public routes */}   
   
   
        {/* we want to protect these routes */}
        <Route element={<PrivateRoutes  role={ROLES.Admin} />}>
        <Route element={<Panel/>}  path="/panel" />
       </Route>
       
       <Route  element={<ShoppingCart/>} path="/shoppingcart" />
       

      
        
       {/* catch all */}
       <Route path="*" element={<Error />} />


        </Routes>
        {/* </div> */}
      </BrowserRouter>
      </AuthProvider>
 
    </productContext.Provider>
  );
};

export default React.memo(App);
