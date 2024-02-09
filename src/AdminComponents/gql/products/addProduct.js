import { gql } from "@apollo/client";

const Add_Product = gql`
  mutation createProduct(
    $title: String!
    $image: [ID]
    $price: Float
   $sizes: [ID]
   $colors: [ID]
    $desc: String
    $categories: [ID]
  ) {
    createProduct(
      data: {
        title: $title
        image: $image
        price: $price
         sizes: $sizes
         colors: $colors
        desc: $desc
        categories: $categories
      }
    ) {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;

export default Add_Product;
