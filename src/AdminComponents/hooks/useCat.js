import { useMutation } from '@apollo/client';
import  { useState } from 'react'
import UPLOAD_FILE from '../gql/upload/uploadImage';


function useCat() {
  //  const url ="http://localhost:1337" 
    const url= import.meta.env.VITE_APP_URL
    const [result, setResult] = useState("");
    const [info, setInfo] = useState("");
 
    const [uploadImage, { data }] = useMutation(UPLOAD_FILE);
  
  // ------ add new category --------//
  const addNew =() => {
    window.location.reload(false);
  }
    // ------ add new category --------//

  // ------ upload images ----------//
  const Change = async (e) => {
   
    if (e.target.files[0] === null) {
   
      return;
    }

    await uploadImage({
      variables: { file: e.target.files[0] },
      onCompleted: () => {
          setResult("success");
          setInfo("Added image");
      },
      onError: () => {
        setResult("fail");
        setInfo("Failed to add image");
      },
    });
  };

  // ------ upload images ----------//
 



  return {addNew,Change,data,result,info,setResult,setInfo,url}
}

export default useCat