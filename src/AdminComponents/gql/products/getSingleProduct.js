import { gql } from "@apollo/client";


const GET_SINGLE_PRODUCT=gql`
query getProduct($id:ID!){
  product(id:$id){
    data{
      id
      attributes{
        title
        price
        
      
      }
    }
  }
}

`;
export default GET_SINGLE_PRODUCT