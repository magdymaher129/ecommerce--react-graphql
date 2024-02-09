import { gql } from "@apollo/client";


export const GET_COLORS=gql`
query getcolors{
    colors{
      data{
        id
        attributes{
         title
          
        }
      }
    }
  }

`;