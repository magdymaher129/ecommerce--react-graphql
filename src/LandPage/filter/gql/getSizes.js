import { gql } from "@apollo/client";


export const GET_Sizes=gql`
query getsizes{
    sizes{
      data{
        id
        attributes{
         title
          
        }
      }
    }
  }

`;