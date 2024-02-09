import { gql } from "@apollo/client";

const UPDATE_BRAND = gql`
  mutation updateBrand($id: ID!, $title: String, $image: [ID]) {
    updateBrand(id: $id, data: { title: $title, image: $image }) {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;
export default UPDATE_BRAND;
