import React, { useEffect, useState } from "react";


function InputFile({ setFiles, setInfo, url }) {

  const [urlLength,setUrlLength]=useState(0)


  useEffect(() =>{
   if(url)setUrlLength(url.length)
    },[url])


  // display images offline
  const displayImages = (e) => {
    setInfo("");
    if (e.target.files.length > 3 || (e.target.files.length+urlLength>3)) {
      setInfo("Warning: images should be less than 4 ");
      console.log(e.target.files.length)
      setFiles([]);
      return;
    } else {
      const allFiles = e.target.files;
      const images = [];

      for (let image of allFiles) {
        images.push(image);
      }

      setFiles(images);
    }
  };
// demand update
// useEffect(()=>{
    
//   if (data) {
//  //   console.log("upload", data.multipleUpload);
//     const idd = data.multipleUpload.map((file) => file.data.id);
//     if (idd.length < 4 && idd.length + ids.length < 4) {
//       setIds([...ids, ...idd]);
//      // console.log("idd", idd);
//     } else {
//       setInfo("Number of images  must be less than 4");
//     }
//   }
//     },[data])


  return <input type='file' multiple onChange={(e) => displayImages(e)} />;
}


export default InputFile;
