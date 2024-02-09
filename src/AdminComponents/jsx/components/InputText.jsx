import React, { useEffect, useState } from "react";
import styles from "../styles/styles.module.css";
import { useSelector } from "react-redux";



function InputText({
  placeholder,
  handleUpdateProperty,
  property,type,
 // params,
   disabled
}) {

  const productItem = useSelector((state) => state.productSingle.data);
  console.log("productItem", productItem);



  //const [value,setValue]=useState(params[property])
  const [value,setValue]=useState()

useEffect(()=>{
  if(placeholder){

  handleUpdateProperty(property,placeholder)
  }

  
},[])

useEffect(()=>{
  if(value && property!=="category"){
      handleUpdateProperty(property,value)
  }

},[value])
const change=(event)=>{
 
 setValue(event.target.value)
    handleUpdateProperty(property,event.target.value)
    console.log("value",value)



}





  return (
    <>
      <label htmlFor={property}  className={styles.label}>
        {property}
      </label>
      <input 
        type={type}
       disabled={disabled}
        onChange={(event) =>change(event)}
        className={!disabled?styles.blockElement:styles.disabled}
        id={property}
      value={value}
     defaultValue={value}
       placeholder={placeholder}
      />
    </>
  );
}

export default InputText;
