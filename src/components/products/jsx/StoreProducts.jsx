import  { useContext, useEffect, useState } from 'react'

import Allproducts from './Allproducts'

// import { useMyProduct } from '../hooks/useMyProduct'
// import storeContext from '../../../data/store'
// import { ITEM_PER_PAGE } from '../../../constants/constant'
// import { useDispatch, useSelector } from 'react-redux'
// import { setProductData } from '../../../Dashboard/redux/slice/productSlice'
// import { isArray } from '@apollo/client/utilities'
import useAllProducts from '../../../filter/services/useAllProducts'

function StoreProducts() {


  const {products:AllProducts,loading,error}=useAllProducts()

  console.log("AllProducts",AllProducts)
//const{  selectedColors,
 
//  selectedcats,
 
//   selectedSize,sort,setTotal,num}=useContext(storeContext)

//  const  { data, loading, error }=useMyProduct(selectedcats,selectedColors,selectedSize,sort,ITEM_PER_PAGE,num)
 

//  const[products,setProducts]=useState([])





//  useEffect(()=>{

//    data && setProducts(data.products.data);
  
//  console.log("products",products)
//    data && setTotal(data.products.meta.pagination.total )
  
// },[data, setTotal])


if(loading){
  <h2>Loading...</h2>
}
if(error){
  <h2>there are some thing error....</h2>
}


return (


   <Allproducts  />
 



)








}

export default StoreProducts   