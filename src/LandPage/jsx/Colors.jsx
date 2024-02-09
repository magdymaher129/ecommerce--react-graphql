import { useQuery } from "@apollo/client";
import React, { useCallback, useEffect, useState } from "react";
import { GET_COLORS } from "../filter/gql/getColors";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllColors,
  getColorID,
  getColorSelected,
} from "../filter/features/colorSlice";
import { setPage } from "../../redux/slice/paginationSlice";

// eslint-disable-next-line react/prop-types
function LazyColors() {
  const [display, setDisplay] = useState(false);
  const { data, loading, error } = useQuery(GET_COLORS);
  

  const color = data?.colors?.data;
  // console.log("color", color);
  // const handleAllClick = useCallback(() => filterByColor2(0), []);

  const dispatch = useDispatch();

  // const handleColor=(value,id)=>{
  //   if(value){
  //     filterByColor2(id)
  //   }else {
  //     filterByColor2(0)
  //   }

  // }

  const [val, setVal] = useState([]);

  const handleAdd = (checked, id) => {
    dispatch(setPage(1));
    if (checked) {
      setVal([...val, id]);
    } else {
      let sub = val.filter((v) => v !== id);
      setVal(sub);
    }
    // console.log("cval",val)
  };

  useEffect(() => {
    dispatch(getColorSelected(val));
    // console.log("val", val);
  }, [dispatch, val]);
  const colors = useSelector( (state) => state.color?.colorSelected)
// console.log("colors",colors)
  useEffect(() => {
    if (color) {
      const colorID = color.map((c) => c.id);
      dispatch(getColorID(colorID));
    }
  }, [dispatch, color]);

  const handleClick = () => {
    setVal([]);

    setDisplay(!display);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error...</p>;
  }
  return (
    <div
      style={{
        width: "200px",
        display: "flex",
        flexDirection: "column",
        marginLeft: "10px",
      }}
    >
      <button style={{ margin: "10px 0" }} onClick={handleClick}>
        COLOR
      </button>
      {color &&
        display &&
        color.map((c) => (
          <div
            key={c.id}
            style={{
              width: "150px",
              display: "flex",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <input
              type='checkbox'
              style={{ margin: "5px 0", display: "block" }}
              onClick={(e) => handleAdd(e.target.checked, c.id)}
              name={c.attributes.title}
              value={c.attributes.title}
            />
            <label htmlFor={c.attributes.title}>{c.attributes.title}</label>
          </div>
        ))}
    </div>
  );
}

export default LazyColors;
