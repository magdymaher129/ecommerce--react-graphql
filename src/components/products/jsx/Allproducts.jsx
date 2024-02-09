/* eslint-disable react/prop-types */



import { useSelector } from 'react-redux';
import SingleCard from './SingleCard';
import { isArray } from '@apollo/client/utilities';
// import  SetPaginate from "./SetPaginate"
// import useAllProducts from '../../../filter/services/useAllProducts';


function Allproducts() {

  const product=useSelector(state=>state.product.products)



console.log("product",product)
 

  return (
<>
    <div style={{flexWrap: "wrap", gap: "10px",margin:"auto"}}  className=' d-flex justify-content-start mt-4 ' >
        {isArray (product) && product.map( product =>  <SingleCard   product={product} key ={product.id} />)}
     
</div>
<>
{/* <SetPaginate/> */}
</>
</>




   
      
    
        
   
   
  )
}

export default Allproducts

