import { gql } from "@apollo/client";

const GET_Sizes=gql`
query getSizes{
    sizes{
      data{
        id
        attributes{
          title
        }
      }
    }
  }`;

export default GET_Sizes