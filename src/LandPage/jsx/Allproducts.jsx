/* eslint-disable react/prop-types */



import { useSelector } from 'react-redux';
import SingleCard from './SingleCard';
import { isArray } from '@apollo/client/utilities';
import SetPaginate from './SetPaginate';
import { Pagination } from 'react-bootstrap';
import useAllProducts from '../Hooks/useAllProducts';
import { GET_PRODUCTS } from '../filter/gql/getProducts';
import { useQuery } from '@apollo/client';




function Allproducts({products}) {

  // const product=useSelector(state=>state.product.products)
//  const {products,loading,error,meta}= useAllProducts()



  return (
<>
    <div style={{flexWrap: "wrap", gap: "10px",margin:"auto"}}  className=' d-flex justify-content-start mt-4 ' >
        {isArray (products?.products?.data) && products.products.data.map( (product,index) =>  <SingleCard   product={product} key ={index} />)}
     
</div>
<>
{/* <SetPaginate/> */}

</>
</>




   
      
    
        
   
   
  )
}

export default Allproducts