import React from 'react'

function OptionItem({label,items}) {
  return (
    <div>
<label htmlFor='category' style={{width:"70px"}}>{label}</label>
        <select  id= "category" name ="category"style={{width:"180px",marginBottom:"10px"}} >
          {items&&items.map((item, index)=><option value={item.id} 
        
       
          key={index}   >{item.attributes.title}</option>)} 
            
         
        </select>
    </div>
  )
}

export default OptionItem