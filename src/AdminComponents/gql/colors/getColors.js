import { gql } from "@apollo/client";

const GET_Colors = gql`
  query getColors {
    colors {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;

export default GET_Colors;
