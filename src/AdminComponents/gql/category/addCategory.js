import { gql } from "@apollo/client";

const Add_Category=gql`
mutation createCategory($title:String!,$image:[ID]){
  createCategory(data:{title:$title ,image:$image}){
    data{
      id
    
    }
  }
}`
;
export default Add_Category


