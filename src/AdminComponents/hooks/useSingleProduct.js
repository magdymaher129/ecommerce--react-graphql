
import { useQuery } from "@apollo/client";
import { useState } from "react";

import { useParams } from "react-router-dom";
import GET_PRODUCT_BY_ID from "../gql/products/getProductByID";




function useSingleProduct() {
    const [files, setFiles] = useState([]);
    const [info, setInfo] = useState("");
    const [url, setUrl] = useState([]);
    const { id } = useParams();
    const idx = id.substring(1);
     //parameters
  const [params, setParams] = useState({

    url: [],
  });
    const [result, setResult] = useState({
        category: [],
        title: "",
        price: 0,
        size: [],
        color: [],
        brand: [],
        desc: "",
        image:[],
      });
  // update function
  const handleUpdateProperty = (property, value) => {
    setResult((prevState) => ({
      ...prevState,
      [property]: value,
    }));
 
  };
  const {
    data: product,
    loading,
    error,
  } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id: idx },
    onCompleted: () => console.log("product", product),
    onError: () => console.log("page is error"),
  });


    // function to delete  an existing image
    const deleteUrl = (URL,paramsUrl,) => {
        const select = paramsUrl.filter((file) => file !== URL);
        setParams({ ...params, url: select });
      //  console.log("seledeleteUrlxtxx",params.select)
        const gg=select.map(p=>parseInt(p.id))
         setUrl(gg)
    
      setResult({...result,image:gg})
    
      };


  return {result,handleUpdateProperty,setResult,product,loading,error,deleteUrl};
}

export default useSingleProduct