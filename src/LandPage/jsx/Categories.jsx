import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_CATEGORIES } from "../filter/gql/getCategories";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  getCategoryID,
  getCategorySelected,
} from "../filter/features/categorySlice";
import { setPage } from "../../redux/slice/paginationSlice";

// eslint-disable-next-line react/prop-types
function LazyCategories() {
  const [display, setDisplay] = useState(false);
  const { data, error, loading } = useQuery(GET_CATEGORIES);
  const [val, setVal] = useState([]);
  const dispatch = useDispatch();
  // const category = data?.categories?.data;
  const category = data?.categories?.data;
  useEffect(() => {
    if (data) {
      dispatch(getAllCategories(data));
    }
  }, [data, dispatch]);

  //const cat = useSelector( (state) => state.category?.category?.categories?.data)

  useEffect(() => {
    if (category) {
      const categoryID = category.map((c) => c.id);
      dispatch(getCategoryID(categoryID));
    }
  }, [dispatch, category]);

  const handleAdd = (checked, id) => {
    dispatch(setPage(1)); // important
    if (checked) {
      setVal([...val, id]);
    } else {
      let sub = val.filter((v) => v !== id);
      setVal(sub);
    }
  };
  useEffect(() => {
    dispatch(getCategorySelected(val));
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
        CATEGORY
      </button>
      {category &&
        display &&
        category.map((cat) => (
          <div
            key={cat.id}
            style={{
              width: "200px",
              display: "flex",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            {" "}
            <input
              type='checkbox'
              style={{ margin: "5px 0", display: "block" }}
              onChange={(e) => handleAdd(e.target.checked, cat.id)}
              name={cat.attributes.title}
              value={cat.attributes.title}
            />
            <label htmlFor={cat.attributes.title}>{cat.attributes.title}</label>
          </div>
        ))}
    </div>
  );
}

export default LazyCategories;
