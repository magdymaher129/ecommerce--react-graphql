import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;
