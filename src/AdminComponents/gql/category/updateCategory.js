import { gql } from "@apollo/client";

const UPDATE_CATEGORY = gql`
mutation updateCategory($id:ID! $title:String  $image:[ID]) {
  updateCategory(id:$id,data:{title:$title,image:$image}){
    data{
      id
      attributes{
        title
      }
    }
  }
}

`;
export default UPDATE_CATEGORY