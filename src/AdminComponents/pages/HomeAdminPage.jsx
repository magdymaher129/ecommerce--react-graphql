import React, { useEffect } from "react";
import { useState } from "react";

import ProductsTable from "../jsx/ProductsTable";
import warningContext from "../store/store";
import Slider from "../jsx/Products/Slider";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/slice/paginationSlice";








function HomeAdminPage({allSize}) {
  const [show, setShow] = useState(false);


  const dispatch=useDispatch()
useEffect(()=>{
  
    dispatch(setPage(1))
  
},[])




  return (
    <warningContext.Provider value={{ show, setShow }}>
     

      <ProductsTable />
     




      {/* <Slider />
      <Sample /> */}
    </warningContext.Provider>
  );
}

export default React.memo(HomeAdminPage);
