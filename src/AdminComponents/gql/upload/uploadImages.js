import { gql } from "@apollo/client";

const UPLOAD_IMAGES = gql`
 mutation createFile( $refId:ID,$ref:String,$field:String,$files:[Upload]!){
   multipleUpload(refId:$refId,
               ref:$ref,field:$field,files:$files){
    data{
      id
     attributes{
      url
    }
    }
  }
}
`;

export default UPLOAD_IMAGES;
