import { gql } from "@apollo/client";



const GET_CATEGORY_BY_ID = gql`
  query getcategory($id: ID) {
    category(id: $id) {
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
export default GET_CATEGORY_BY_ID ;
