import { useQuery } from "@apollo/client";
import React, { useCallback, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { GET_Sizes } from "../filter/gql/getSizes";
import {
  getAllsizes,
  getSizeSelected,
  getSizeID
} from "../../redux/slice/sizeSlice";
import { setPage } from "../../redux/slice/paginationSlice";

function LazySizes() {
  const [display, setDisplay] = useState(false);
  const { data, error, loading } = useQuery(GET_Sizes);
  const [val, setVal] = useState([]);
  const dispatch = useDispatch();
  const size = data?.sizes?.data;

  useEffect(() => {
    if (data) {
      // console.log("ndata",data)
      dispatch(getAllsizes(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (size) {
      const sizeID = size.map((c) => c.id);
      dispatch(getSizeID(sizeID));
    }
  }, [dispatch, size]);

  const handleAdd = (checked, id) => {
    dispatch(setPage(1));
    if (checked) {
      setVal([...val, id]);
    } else {
      let sub = val.filter((v) => v !== id);
      setVal(sub);
    }
  };

  useEffect(() => {
    dispatch(getSizeSelected(val));
    // console.log("val", val);
  }, [dispatch, val]);

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
        SIZE
      </button>
      {size &&
        display &&
        size.map((s) => (
          <div
            key={s.id}
            style={{
              width: "150px",
              display: "flex",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            {" "}
            <input
              type='checkbox'
              style={{ margin: "5px 0", display: "block" }}
              onClick={(e) => handleAdd(e.target.checked, s.id)}
              name={s.attributes.title}
              value={s.attributes.title}
            />
            <label htmlFor={s.attributes.title}>{s.attributes.title}</label>
          </div>
        ))}
    </div>
  );
}

export default LazySizes;
