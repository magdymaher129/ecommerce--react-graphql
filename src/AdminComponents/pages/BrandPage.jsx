import React, { useEffect } from "react";
import { useState } from "react";
import warningContext from "../store/store";
import Slider from "../jsx/Products/Slider";
import BrandTable from "../jsx/Brands/BrandTable";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBrandPage } from "../../redux/slice/paginationSlice";





function BrandPage({allSize}) {
  const [show, setShow] = useState(false);
  const dispatch=useDispatch()
useEffect(()=>{
  
    dispatch(setBrandPage(1))
  
},[])
  return (
    <warningContext.Provider value={{ show, setShow }}>
 
    
      <BrandTable/>
      {/* < Select  multi  values ={values}options={options} onChange={(values) => setValues(values)}/> */}
  
      {/* <div className='border border-2  rounded p-4 w-50 m-auto bg-info '  style={{boxShadow:"2px 4px grey"}} >
<div className='text-center '>

    <input type="text" onChange={(e)=>setNum(e.target.value)}  className="mx-4 bg-primary text-light text-center "value={num} />

</div>


    </div> */}

      {/* <Slider /> */}
   
    </warningContext.Provider>
  );
}

export default BrandPage;
