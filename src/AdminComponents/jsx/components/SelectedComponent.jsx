import React, { useState } from 'react'
import Select from "react-select"
function SelectedComponent({options,name}) {
    const [selectedOption, setSelectedOption] = useState([]);
  return (
<>
<label >{name}</label>
    <Select
    className='mb-3'
      styles={{
        multiValueLabel:(baseStyle,state)=>({
          ...baseStyle,
          backgroundColor:"grey",
          color:"#f2f2f2",
          fontWeight:"bolder",
          textTransform:"uppercase"
        }),
      multiValue:(baseStyle,state)=>({
        ...baseStyle,
        backgroundColor:"grey",

      }),
    multiValueRemove:(baseStyle,state)=>({
      ...baseStyle,
        color:"white"
    }),
    menu:(baseStyle,state)=>({
        ...baseStyle,
          color:"grey",
    
          fontWeight:"bolder",
          textTransform:"capitalize"
      }),
    }}
   
       onChange={setSelectedOption}
       options={options}
       isMulti
       isSearchable
   



     /></>
  )
}

export default SelectedComponent