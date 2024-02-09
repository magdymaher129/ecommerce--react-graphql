import { useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import Select from "react-dropdown-select";

import { productContext } from "../../../App";
import GET_Sizes from "../../gql/sizes/getSizes";

function SizeSelect() {
    const { data: SIZES } = useQuery(GET_Sizes);
    const {size,setSize} = useContext(productContext);
  
    const [itemSizes, setItemSizes] = useState([]);
    const [values, setValues] = useState([]);
    const [sizes, setSizes] = useState("");
  
    useEffect(() => {
      if (SIZES) {
        setSizes(SIZES.sizes.data);
        // console.log(colors);
        if (sizes) {
          const object = sizes.map((obj) => ({
            label: obj.attributes.title,
            id: obj.id,
          }));
          setItemSizes(object);
          //  console.log("items", object);
        }
  
        if (values) {
          const sizeID = values.map((value) => value.id);
       //  setselectedColor(values);
         setSize(sizeID);
         //  console.log(size);
        }
      }
    }, [SIZES, sizes, values, setSize,size]);

  
  
  
  
  
    return (
      <Select
        style={{
          backgroundColor: "white",
          color: "black",
          fontSize: "18px",
          textAlign: "center",
        }}
        name='Color'
        options={itemSizes}
        labelField='label'
        valueField='id'
        multi
        onChange={(value) => setValues(value)}
      ></Select>
  )
}

export default SizeSelect