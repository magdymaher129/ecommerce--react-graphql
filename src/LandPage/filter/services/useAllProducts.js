import {  useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCTS } from "../gql/getProducts";
import { useEffect } from "react";
import {  getAllProducts, getMetaProducts } from "../features/ProductSlice";



function useAllProducts() {

// const pageSize= import.meta.env.VITE_APP_PAGE_COUNT;

  const pageSize= 6
  const colorSelected=useSelector(state=>state.colors.colorSelected)
 const categorySelected=useSelector(state=>state.categories.categorySelected)
 const sizeSelected=useSelector(state=>state.size.sizeSelected)
 const page=useSelector(state=>state.pagination.page)
//  console.log("cat",categorySelected)
//  console.log("color",colorSelected)
//  console.log("size",sizeSelected)

let cat=useSelector(state=>state.categories.categoryID)

if(categorySelected.length>0){
  cat=categorySelected

}


let color=useSelector(state=>state.colors.colorID)
if(colorSelected.length>0){
  color=colorSelected

}

let size=useSelector(state=>state.size.sizeID)
if(sizeSelected.length>0){
  size=sizeSelected

}
 const{data,loading,error}=useQuery(GET_PRODUCTS,{variables:{
        cat,color,size,pageSize,page
      }})


    const dispatch = useDispatch();


      useEffect(()=>{
 let Allproducts=data?.products?.data
 dispatch(getAllProducts(Allproducts))




      },[data, dispatch])



      useEffect(()=>{
 
        let meta=data?.products?.meta
        if(meta){
          dispatch(getMetaProducts(meta))
        }
      
      // console.log("meta", meta)
    
       
             },[data, dispatch])
 
 const {products}=useSelector(state => state.product);

 const meta=useSelector(state => state.product.meta);



   
  return {products,loading,error,meta}
}

export default useAllProducts