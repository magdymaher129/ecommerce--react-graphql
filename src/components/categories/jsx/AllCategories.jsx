import SingleCategory from "./SingleCategory";
import { useCat } from "../hooks/useCat";
import { useContext, useState } from "react";
import storeContext from "../../../data/store";
import { useSelector } from "react-redux";
import { isArray } from "@apollo/client/utilities";
import { useQuery } from "@apollo/client";
import getProductsByCategories from "../../../Dashboard/AdminComponents/gql/products/getProductsByCategories";

function AllCategories({dataProduct}) {
  // fetch data by using hook useCat

  const {  cat ,loading,error} = useCat();

const cats=useSelector(state=>state.category.data)

const [ids,setIds]=useState([])
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <form>
      {isArray (cat) &&
        cat.map((item) => (
          <SingleCategory
            title={item.attributes.title}
            id={item.id}
            key={item.id}
          setIds={setIds}
          ids={ids}
          dataProduct={dataProduct}
          />
        ))}
      
    </form>
  );
}

export default AllCategories;
