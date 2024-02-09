import { useMutation, useQuery } from "@apollo/client";
import UPDATE_PRODUCT from "../gql/products/updateProduct";
import { useEffect, useState } from "react";
import useSingleProduct from "./useSingleProduct";
import { useDispatch, useSelector } from "react-redux";
import UPLOAD_IMAGES from "../gql/upload/uploadImages";
import { setProductSingle } from "../../redux/slice/productSingleSlice";
import { useParams } from "react-router-dom";
import GET_PRODUCT_BY_ID from "../gql/products/getProductByID";

const useProducts=()=>{


      //params
  const { id } = useParams();
  const idx = id.substring(1);
  const urlx = import.meta.env.VITE_APP_URL;
  const dispatch = useDispatch();
  const { data: singleProduct } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id: idx },
  });
  dispatch(setProductSingle(singleProduct));

  const productItem = useSelector((state) => state.productSingle.data);
  console.log("productItem", productItem);

  //parameters
  const [params, setParams] = useState({
  url: [],
  });
  // get data from redux
  const products = useSelector((state) => state.product);
  const color = useSelector((state) => state.color.data);
  const size = useSelector((state) => state.size.data);
  const brand = useSelector((state) => state.brand.data);

  console.log("brand", brand);

  const [files, setFiles] = useState([]);
  const [info, setInfo] = useState("");
  const [url, setUrl] = useState([]);
  const [ids, setIds] = useState([]);
  const [title, setTitle] = useState();
  const [upload, { data }] = useMutation(UPLOAD_IMAGES);



  const{result,handleUpdateProperty,
    setResult,product,loading,error} =useSingleProduct()

  useEffect(() => {
    if (product) {
      setParams({
               url: product.product.data.attributes.image.data,
      });
    }
  }, [product]);



  // function to upload Images
  const UploadImages = async () => {
    setInfo("");
    if (files.length > 0) {
      if (files.length < 4 && files.length + params.url.length < 4) {
        await upload({
          variables: {
            refId: idx,
            ref: "api::product.product",
            field: "image",
            files,
          },
          onCompleted: () => {
          setResult((prev)=>({
            ...prev,
            image:url}))
      
            setInfo("Images have been uploaded");

          }
      
        
        });
      } else {
        setInfo("Number of images  must be less than 4");
      }
    } else {
      setInfo("No  images are selected");
    }
  };





  useEffect(() => {
    if (result) {

    }
    console.log("result", result);

  }, [result]);




  useEffect(() => {
    let allImages=[]

   if (singleProduct){
   //  console.log("imageData",singleProduct.product.data.attributes.image.data)
      allImages=singleProduct.product.data.attributes.image.data
      const rr=singleProduct.product.data.attributes.image.data.map(p=>parseInt(p.id))
     // console.log("rr",rr)
      setResult((prevState) => ({
        ...prevState,
        image: rr,
      }));
       setTitle(singleProduct.product.data.attributes.title)
          setUrl(allImages)
   }
  }, [singleProduct]);

  const dd=url.map(x=>x.id)
  const gg=dd.map(x=>parseInt(dd))
  useEffect(()=>{
    if(gg) {
      setIds(gg)
      console.log("url",url)
      console.log("ids",ids)
    }
  },[url])

  // function to delete  an existing image
  const deleteUrl = (URL) => {
    const select = params.url.filter((file) => file !== URL);
    setParams({ ...params, url: select });
  //  console.log("selextxx",params.select)
    const gg=select.map(p=>parseInt(p.id))
     setUrl(gg)

  setResult({...result,image:gg})

  };

// demand update
  useEffect(()=>{
    
    if (data) {
      console.log("upload", data.multipleUpload);
      const idd = data.multipleUpload.map((file) => file.data.id);
      if (idd.length < 4 && idd.length + ids.length < 4) {
        setIds([...ids, ...idd]);
        console.log("idd", idd);
        console.log("ids", ids);
      } else {
        setInfo("Number of images  must be less than 4");
      }
    }
      },[data])
      const size2 = result.size.map((el) => parseInt(el));
      const color2 = result.color.map((el) => parseInt(el));
      const brand2 = result.brand.map((el) => parseInt(el));
      const [updateProduct] = useMutation(UPDATE_PRODUCT);
    
      const update = async () => {
        await updateProduct({
          variables: {
            id: idx,
            title: result.title,
            price: parseInt(result.price),
            size: size2,
            colors: color2,
            brands: brand2,
            desc: result.desc,
            image:result.image
          },
          onCompleted: () => setInfo(`${result.title} has been updated`),
    
          onError: () => setInfo(`ERROR: ${result.title} has not been updated`),
        });
      };
  if (loading) 
   {
   return (
{/* <p 
style={{textAlign:"center",
padding:"10px",width:"100%",
backgroundColor:"lightgreen",
fontSize:"20px"}}>Loading...</p> */}


   ) 
   }

  if (error) {
    // return (
        //  <p style={{textAlign:"center",padding:"10px",width:"100%",backgroundColor:"lightpink"}}>ERROR: {error}</p>
    // )
  }
  return {
    productItem, handleUpdateProperty,
    idx ,  products,  size, color,
    brand, files, setFiles,info,
    params:params.url,
    length:ids.length,
   

     setInfo, UploadImages,
    update,url, setUrl,urlx,deleteUrl

  }

}

export default useProducts