import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import UPLOAD_IMAGES from "../gql/upload/uploadImages";

import UPDATE_BRAND from "../gql/brands/updateBrand";
import GET_BRAND_BY_ID from "../gql/brands/getBrandById";

const useBrandUpdate=()=>{


      //   // parameters
  const [files, setFiles] = useState([]);
 
  const [url, setUrl] = useState([]);
  const [ids, setIds] = useState([]);
  const [note, setNote] = useState("");
  const [warning, setWarning] = useState("");
  const [upload, { data }] = useMutation(UPLOAD_IMAGES);
  const [updateBrand] = useMutation(UPDATE_BRAND);
  const urlx = "http://localhost:1337";
  const [title, setTitle] = useState();
  const { id } = useParams();
  const idx = id.substring(1);


  const { data: brand } = useQuery(GET_BRAND_BY_ID, {
    variables: { id: idx },
  });

  // get title from data
  useEffect(() => {
     let allImages=[]

    if (brand){
      console.log("brand",brand.brand.data.attributes.image.data)
      allImages=brand.brand.data.attributes.image.data
          setTitle(brand.brand.data.attributes.title)
          setUrl(allImages)
    }

    
 


  }, [brand]);

  useEffect(()=>{
    if(url) {
      const dd=url.map(x=>x.id)
      setIds(dd)
      console.log("url",url)
      console.log("dd",dd)
    }
  },[url])
  const deleteUrl=(URL)=>{
 
      const select = url.filter(file=>file!==URL)
      setUrl(select)
    
   }
  const update = async (title) => {
    await updateBrand({
      variables: { id: idx, image:ids,title: title },
      onCompleted: () => {
        setNote("Brand has been updated");
      },
      onError: () => {
        setWarning("ERROR :Brand has not been updated");
      },
    });
  };
  // display images offline
  const displayImages = (e) => {
    setWarning("");
    setNote("");
    if ( e.target.files.length > 3 || (ids.length+e.target.files.length)>3) {
      setWarning("images should be less than 4 ");
      return;
    }
   
    // console.log(e.target.files)
    const allFiles = e.target.files;
    const images = [];

    for (let image of allFiles) {
      images.push(image);
    }

    setFiles(images);
    // UploadImages()
   
  };

    // function to upload Images
    const UploadImages = async () => {
    // if(files.length>0) {
      if (files.length < 4 && (files.length + ids.length) < 4) {
      setWarning("");
      await upload({
      variables: {
        refId: idx,
        ref: "api::brand.brand",
        field: "image",
        files,
      },
      onCompleted: () => 
      
      {
      
        setNote("Images have been uploaded")
    
      }
    });

      
      }else{
        setWarning("Number of images  must be less than 4");
      }
    // }else{
    //   setWarning("No  images are selected");
    // }
    };
    useEffect(()=>{
    
    if (data) {
    console.log("upload", data);
      const idd = data.multipleUpload.map((file) => file.data.id);
      if (idd.length < 4 && idd.length + ids.length < 4) {
        setIds([...ids, ...idd]);
    console.log("idd", idd);
      } else {
        setWarning("Number of images  must be less than 4");
      }
    }
      },[data])

//       useEffect(()=>{
// if(ids){
//      console.log("ids",ids)
// }
//       },[ids])
    // function to delete images
  const DeleteImages = (select) => {
    setWarning("");
    setNote("");
    const selected = files.filter((file) => file !== select);
  // console.log(selected);
    setFiles(selected);
  };
  return {
    title,
    setTitle,
    displayImages,
    files,
    note,
    warning,
    DeleteImages,
    deleteUrl,
    url,
    urlx,
    UploadImages,
    update,
  };
}
export default useBrandUpdate;