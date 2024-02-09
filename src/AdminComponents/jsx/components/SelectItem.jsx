import React, { useEffect, useState } from "react";
import Select from "react-dropdown-select";
// import Select from "react-select";

function SelectItem({ selected, options, name, result, handleUpdateProperty,xselect }) {
 
 const [values,setValues]=useState(selected)
 
  let selectedprop=[]
  // if(selected){
  //   selectedprop=selected.map(s=>s.value)

  // }else {
  //   selectedprop=[]
  // }
  const [selectedOption, setSelectedOption] = useState([]);
  const [opt, setOpt] = useState([]);

  const xx = (name, selectedOption) => {
   const dd= handleUpdateProperty(name, selectedOption);
     console.log(dd)
  };
  useEffect(( )=>{
if(selectedOption){
  console.log(selectedOption)
 const cc = selectedOption.length > 0 ? selectedOption : selected;

 const dd = cc.map((c) => c.value);
 setSelectedOption(handleUpdateProperty(name, dd));
  console.log("dd",dd)
}
  },[  selectedOption])

  useEffect(() => {
    // const cc = selectedOption.length > 0 ? selectedOption : selected;
    // if (cc) {
    //   const dd = cc.map((c) => c.value);
    //   xx(name, dd);
    //   //    setResult(`{${props.name}:${dd}}`)
    // } 

        // if(cc.length>0){
        // setOpt(cc.map(c=>c.value))
        // }
    // console.log(props.result)
  }, [selectedOption]);

  return (
    <>
      <label>{name}</label>

      < Select  multi labelField="label" valueField="value"
       values ={values} options={options} 
       onChange={(values) => xx(name, selectedOption)}/>

{/* 
      <Select
        className='mb-4'
        styles={{
          multiValueLabel: (baseStyle, state) => ({
            ...baseStyle,
            backgroundColor: "grey",
            color: "#f2f2f2",
            fontWeight: "bolder",
            textTransform: "uppercase",
          }),
          multiValue: (baseStyle, state) => ({
            ...baseStyle,
            backgroundColor: "grey",
          }),
          multiValueRemove: (baseStyle, state) => ({
            ...baseStyle,
            color: "white",
          }),
          menu: (baseStyle, state) => ({
            ...baseStyle,
            color: "grey",

            fontWeight: "bolder",
            textTransform: "capitalize",
          }),
        }}
        defaultValue={selected}
        onChange={setSelectedOption}
        options={options}
        isMulti
        isSearchable
      /> */}
    </>
  );
}

export default SelectItem;
