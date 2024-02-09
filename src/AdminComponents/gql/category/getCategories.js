import { gql } from "@apollo/client";

const GET_Category=gql`
query getCategory{
    categories{
      data{
        id
        attributes{
          title
        }
      }
    }
  }`;

export default GET_Category