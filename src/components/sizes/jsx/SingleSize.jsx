/* eslint-disable react/prop-types */

import { useContext } from "react";
import storeContext from "../../../data/store";


function SingleSize(props) {


  const { selectedSize,setSelectedSize } = useContext(storeContext);

// handle size
  const handleSize = (e, id) => {
    const ischecked = e.target.checked;
    if (ischecked) return setSelectedSize([...selectedSize, id]);
    if (!ischecked)
      return setSelectedSize(
        selectedSize.filter((selectedSize) => selectedSize !== id),
      );
    console.log(selectedSize);
  };



  return (
    <div >
    <input
      type='checkbox'
      data-category={props.id}
      value={props.title}
      id='size'
      name='size'
      onChange={(e)=>handleSize(e,props.id)}
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


export default SingleSize