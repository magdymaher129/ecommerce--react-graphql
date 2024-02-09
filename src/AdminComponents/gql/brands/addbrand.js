import { gql } from "@apollo/client";

const Add_Brand=gql`
mutation createBrand($title:String!,$image:ID){
    createBrand(data:{title:$title ,image:$image}){
    data{
      id
    
    }
  }
}`
;
export default Add_Brand