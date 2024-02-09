// import { isArray } from '@apollo/client/utilities';
// import React, { useEffect, useState } from 'react'
// import { Button } from 'react-bootstrap';
// import Select from "react-dropdown-select"
// import { useSelector } from 'react-redux';

// const convert=(cat)=>{
//   if(isArray(cat)){

//     const values=cat.map(c=>c.id)
//     const label=cat.map(c=>c.attributes.title)
//     return values.map((id, index) => ({ id, label: label[index] }));
//       //console.log("arr3",arr3)
//     }
// }
// function Example({productItem,handleUpdateProperty,name}) {
 

 


 
//   const items=convert(productItem.product.data.attributes.sizes.data)
// //console.log("items",items.map(item=>item.id))
// const itemId=items.map(item=>item.id)
// const [values,setValues]=useState([items])

// //console.log("values",values)
//  //handleUpdateProperty(name,values)
//   const [opp,setOpp]=useState([])

//    useEffect(()=>{
    

//  setValues(itemId)
//      if(values.length===0){

//        setOpp(items.map(val => val.id))
//          //  setOpp(values.map(val => val.id))
//           // handleUpdateProperty(name,opp)
//      }
// //  //
//    },[])


   
//    useEffect(()=>{
    

     

//     if(values.length > 0){

//    setOpp(values.map(val => val.id))
//      //  handleUpdateProperty(name,opp)
//     }
//    //  //setValues(items)
//       },[values])

// //console.log("productItem",productItem.product.data.attributes.colors.data,productItem)
//   let arr3=[]
// const cat=useSelector(state=>state.size.data)
// const prod=useSelector(state=>state.product.data)
// //console.log("prod",prod)

// arr3=convert(cat)


// const handleChange=()=>{
 
// //console.log("opp",opp)

// setOpp(values.map(val => val.id))
      
//       handleUpdateProperty(name,opp)
  
// // console.log("result",result)
// }






//   return (
//     <div style={{width:"400px", margin:"auto"}}>
// <Select 
// name='Select'
// options={arr3}
// values={values}
// labelField='label'
// valueField='id'
// multi
// onChange={value=>setValues(value)}
//  // onDropdownClose={handleChange}
 
  
// >
// </Select>
//          <h2>drop down</h2>
// <Button  style={{width:"300px"}}onClick={handleChange}> array</Button> 
     
//     </div>
//   )
// }

// export default Example