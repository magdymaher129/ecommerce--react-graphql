/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import storeContext from "../../../data/store";
import { useDispatch, useSelector } from "react-redux";
import {
 
  setProductData,
} from "../../../Dashboard/redux/slice/productSlice";
import getProductsByCategories from "../../../Dashboard/AdminComponents/gql/products/getProductsByCategories";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../../Dashboard/AdminComponents/gql/getProducts";

/**
 * Renders a checkbox input and a label for a single category.
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the category.
 * @param {string} props.title - The title of the category.
 * @param {function} props.handleCatChange - A function to handle changes when the checkbox is checked or unchecked.
 * @returns {JSX.Element} - The rendered JSX elements.
 */
function SingleCategory(props) {
  const { id, title,setIds,ids,dataProduct } = props;
  // if(!id){
  //   id==="1"
  // }
  const { selectedcats, setSelectedcats } = useContext(storeContext);



  const dispatch = useDispatch();
  const { data: selected } = useQuery(getProductsByCategories, {
    variables: {
      id: id,
     pageSize:8,
     page:1
    },
  });
 
  const handleCategory = (e) => {
    const ischecked = e.target.checked;
    console.log("selected",selected.products.data)
    if (ischecked) {
    //  setIds(...ids,id)
      console.log("ids",ids)
      dispatch(setProductData(selected.products.data));
    
  
     
    }
    // if (ischecked) return setSelectedcats([...selectedcats, id]);

    // if (!ischecked)
    //   return setSelectedcats(
    //     selectedcats.filter((selectedcats) => selectedcats !== id),
    //   );
    //   if (!ischecked)
    //  {
    //   dispatch(setProductData(dataProduct.products.data));
    //  }
  };

  return (
    <div>
      <input
        type='checkbox'
        // data-category={id}
        style={{ display: "inline-block" }}
        value={title}
        id='cat'
        name={title}
        onChange={(e)=>handleCategory(e)}
      />
      <label
        htmlFor={id}
        className='checkbox white capital ps-2'
        style={{ width: "auto" }}
      >
        {title}
      </label>
      <br />
    </div>
  );
}

export default SingleCategory;
