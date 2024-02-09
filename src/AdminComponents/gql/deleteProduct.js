import { gql } from "@apollo/client";

export const DELETE_PRODUCT=gql`
mutation deleteProducts($id:ID!){
    deleteProduct(id:$id){
      data{
        attributes{
          title
        }
      }
    }
  }
`
;