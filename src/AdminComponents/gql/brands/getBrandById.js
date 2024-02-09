import { gql } from "@apollo/client";



const GET_BRAND_BY_ID = gql`
  query getbrand($id: ID) {
    brand(id: $id) {
      data {
        attributes {
          title
          image {
            data {
              id
              attributes
            {
              url
            }
            }
          }
        }
      }
    }
  }
`;
export default GET_BRAND_BY_ID ;