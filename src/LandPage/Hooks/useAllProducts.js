import {  useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCTS } from "../filter/gql/getProducts";
import { useEffect, useState } from "react";
import {  getAllProducts, getMetaProducts } from "../../redux/slice/productSlice";



function useAllProducts() {



 const pageSize= 6

const colorSelected=useSelector(state=>state.color.colorSelected)
const categorySelected=useSelector(state=>state.category.categorySelected)
const sizeSelected=useSelector(state=>state.size.sizeSelected)
const page=useSelector(state=>state.pagination.page)
//  console.log("cat",categorySelected)
//  console.log("color",colorSelected)
//  console.log("size",sizeSelected)

let cat=useSelector(state=>state.category.categoryID)

if(categorySelected.length>0){
cat=categorySelected

}


let color=useSelector(state=>state.color.colorID)
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
  const [prod,setProd]=useState({
    id:[],
    title:[],
    price:[],
    color:[],
    colorTitle:[],
    size:[],
    sizeTitle:[],
    category:[],
    categoryTitle:[],
  
  })
// const [id,SetID]=useState([])
    useEffect(()=>{
      if(data){
         console.log("dataG",data)

        let Allproducts=data?.products?.data
        console.log("Allproducts",Allproducts)
        let idx = Allproducts.map(i=>i.id)
        let title = Allproducts.map(i=>i.attributes.title)
        let price = Allproducts.map(i=>i.attributes.price)
        let color = Allproducts.map(i=>i.attributes.colors?.data?.map(i=>i.id))
        let colorTitle = Allproducts.map(i=>i.attributes.colors?.data?.map(i=>i.attributes.title))
        let size = Allproducts.map(i=>i.attributes.sizes?.data?.map(i=>i.id))
        let sizeTitle = Allproducts.map(i=>i.attributes.sizes?.data?.map(i=>i.attributes.title))
        let category = Allproducts.map(i=>i.attributes.categories?.data[0].id)
        let categoryTitle = Allproducts.map(i=>i.attributes.categories?.data[0].attributes.title)
        // let image=Allproducts.map(i=>i.attributes?.image?.data[0].attributes?.url)
        // SetID(...idx)
        setProd({id:idx,title,price:price,color:color,colorTitle:colorTitle,size:size,sizeTitle:sizeTitle,category:category,
          categoryTitle:categoryTitle})



        console.log("prod",prod)
        // dispatch(getAllProducts(Allproducts))

      }





    },[data, dispatch])


    useEffect(()=>{


      if(prod){
         dispatch(getAllProducts(prod))
    console.log("prod", prod)
      }
    
  
     
           },[dispatch, prod])
    useEffect(()=>{

      let meta=data?.products?.meta
      if(meta){
        dispatch(getMetaProducts(meta))
      }
    
    // console.log("meta", meta)
  
     
           },[data, dispatch])

const {products}=useSelector(state => state.product);
// if(products)console.log("products",products)

const meta=useSelector(state => state.product.meta);



 
return {products,loading,error,meta}
}

export default useAllProducts