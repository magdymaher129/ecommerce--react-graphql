import { useSelector } from 'react-redux'
import useAllProducts from '../Hooks/useAllProducts'
import Allproducts from './Allproducts'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../filter/gql/getProducts'


function StoreProducts({products}) {
    // const {products,loading,error,meta}=useAllProducts()

 
    // if(loading){
    //     <h2>Loading...</h2>
    //   }
    //   if(error){
    //     <h2>there are some thing error....</h2>
    //   }
      
  return (
    <>
   <Allproducts products={products} /> 

  </>
  )
}

export default StoreProducts