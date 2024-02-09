import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

import UPLOAD_IMAGES from "../gql/upload/uploadImages";

function useProduct() {
  const url = import.meta.env.VITE_APP_URL;
  const [result, setResult] = useState("");
  const [info, setInfo] = useState("");
  const [files, setFiles] = useState({});
 // const [uploadImages, { data }] = useMutation(UPLOAD_IMAGES);

  // ------ add new category --------//
  const addNew = () => {
    window.location.reload(false);
  };
  // ------ add new category --------//

  // ------ upload images ----------//
  const Change = async (e) => {
    if (e.target.files[0] === null) {
      return;
    }

    // setFiles(e.target.files);
    console.log(e.target.files[0]);
    console.log(e.target.files[1]);
    // await uploadImages(files);
    console.log(e.target.files);
    // await uploadImages({ 
    //   variables: { files: files },
    //   onCompleted: () => {
    //     setResult("success");
    //     setInfo("Added image");
    //   },
    //   onError: () => {
    //     setResult("fail");
    //     setInfo("Failed to add image");
    //   },
    // });
 
        // uploadImages({
        //   variables: {
        //     files,
        //   },
        // });
      }
  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //   }
  // }, [data]);

  // ------ upload images ----------//

  return { addNew, Change, result, info, setResult, setInfo, url };
}

export default useProduct;
