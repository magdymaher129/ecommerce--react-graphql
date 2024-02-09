import { useContext, useEffect } from "react";
import storeContext from "../../data/store";
import { ITEM_PER_PAGE } from "../../constants/constant";
import { Button } from "react-bootstrap";
import { useLazyQuery } from "@apollo/client";
import { useMyProduct } from "../products/hooks/useMyProduct";


function Paginate() {

    const {  num,setNum,total, selectedColors,selectedcats, selectedSize} = useContext(storeContext);
  
useEffect(()=>{
setNum(1)
},[selectedColors, selectedcats, selectedSize, setNum])
    const inc=()=>{
       
   

        if(num<total/ITEM_PER_PAGE){
    
        setNum((prev)=> prev+ 1 )
        }
    }
    const dec=()=>{
      
       
        if(num>1){
    
        setNum((prev)=> prev- 1 )
    }
}    


  return (
    <div  style={{  display:"flex",justifyContent:"center"
}}>

<Button  onClick={dec} variant="dark">&lt;</Button>
    <p style={{fontSize:"14px",fontWeight:"800",marginTop:"10px", padding:"0 10px 0 10px"}}>{num}</p>
    <Button    onClick={inc} variant="dark">&gt;</Button>
</div>
  )
}

export default Paginate