import React, { useEffect } from "react";
import { useState } from "react";
import warningContext from "../store/store";
import Slider from "../jsx/Products/Slider";
import CategoryTable from "../jsx/categories/CategoryTable";
import { useDispatch, useSelector } from "react-redux";
import { setCatPage } from "../../redux/slice/paginationSlice";
import Head from "../panel/Head";
import SBar from "../panel/SBar";



function CategoryPage({ allSize }) {

  const [show, setShow] = useState(false);

  const dispatch=useDispatch()
useEffect(()=>{
  
    dispatch(setCatPage(1))
},[])
  return (
    <warningContext.Provider value={{ show, setShow }}>

      <CategoryTable />
   
    
    </warningContext.Provider>
  );
}

export default CategoryPage;
