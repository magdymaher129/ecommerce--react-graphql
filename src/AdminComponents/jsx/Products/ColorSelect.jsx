import { useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import Select from "react-dropdown-select";
import GET_Colors from "../../gql/colors/getColors";
import { productContext } from "../../../App";





function ColorSelect() {
  const { data: COLORS } = useQuery(GET_Colors);
  const {color,setColor} = useContext(productContext);

  const [itemColors, setItemColors] = useState([]);
  const [values, setValues] = useState([]);
  const [colors, setColors] = useState("");

  useEffect(() => {
    if (COLORS) {
      setColors(COLORS.colors.data);
      // console.log(colors);
      if (colors) {
        const object = colors.map((obj) => ({
          label: obj.attributes.title,
          id: obj.id,
        }));
        setItemColors(object);
        //  console.log("items", object);
      }

      if (values) {
        const colorID = values.map((value) => value.id);
     //  setselectedColor(values);
        setColor(colorID);
        // console.log(color);
      }
    }
  }, [COLORS, colors, values, setColor,color]);





  return (
    <Select
      style={{
        backgroundColor: "white",
        color: "black",
        fontSize: "18px",
        textAlign: "center",
      }}
      name='Color'
      options={itemColors}
      labelField='label'
      valueField='id'
      multi
      onChange={(value) => setValues(value)}
    ></Select>
  );
}

export default ColorSelect;
