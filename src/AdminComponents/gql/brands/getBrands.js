import { gql } from "@apollo/client";

const GET_BRANDS=gql`
query getBrands{
    brands{
      data{
        id
        attributes{
          title
        }
      }
    }
  }`;

export default GET_BRANDS