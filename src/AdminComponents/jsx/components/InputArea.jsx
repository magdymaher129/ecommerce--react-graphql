import React, { useEffect, useState } from 'react'

function InputArea({label,desc,handleUpdateProperty,property}) {
  const [value,setValue]=useState(null)

  useEffect(()=>{
    handleUpdateProperty(property,desc)
  },[])
  useEffect(()=>{
    if(value){

      handleUpdateProperty(property,value)
    }
  },[  value])

  const change=(event)=>{
 
  setValue(event.target.value )
      handleUpdateProperty(property,event.target.value)
   

  
  
  }
  return (
    <div className='my-2'>
          <label htmlFor='desc'  style={{display:"block", width:"50px",marginBottom:"10px"}} >{label}</label>
   <textarea  placeholder={desc}  rows="8"   style={{width:"100%"}}  id="desc" name="desc" onChange={(e)=>change(e)}/>
   </div>
  )
}

export default InputArea   