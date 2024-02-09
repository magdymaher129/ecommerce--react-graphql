/* eslint-disable react/prop-types */

import { useContext } from "react";
import storeContext from "../../../data/store";




function SingleColor(props) {
  const {    selectedColors,
    setSelectedColors,}=useContext(storeContext);

  const handleColor = (e, id) => {
    const ischecked = e.target.checked;
    if (ischecked) 
     return setSelectedColors([...selectedColors, id]);
  
    if (!ischecked) 
     return  setSelectedColors(selectedColors.filter((item) => item !== id));

  
    
    console.log(selectedColors)

  }
  return (
   
        <div >
        <input
          type='checkbox'
          data-category={props.id}
          value={props.title}
          id='color'
          name='color'
          onChange={(e)=>handleColor(e, props.id)}
          style={{display:"inline-block"}}
        />
        <label
          htmlFor={props.id}
          className='checkbox white capital ps-2'
          style={{ width: "auto" }}
        >
          {props.title}
        </label>
    
        <br></br>
      </div>
      )
}

export default SingleColor