import { gql } from "@apollo/client";

const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $id: ID!
    $title: String
    $price: Float
    $size: [ID]
    $colors: [ID]
    $brands:[ID]
    $desc: String
    $image: [ID]
   
  ) {
    updateProduct(
      id: $id
      data: {
        title: $title
        price: $price
        sizes: $size
       colors: $colors
       brands:$brands
        desc: $desc
        image: $image
       
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
export default UPDATE_PRODUCT;



//  const gg=` mutation updateProduct(
//     $id: ID!
//     $title: String
//     $price: Float
//     $size: [ID]
//     $colors: [ID]
//     $desc: String
//     // $image: [ID]
//   ) {
//     updateProduct(
//       id: $id
//       data: {
//         title: $title
//         price: $price
//         sizes: $size
//         colors: $colors
//         desc: $desc
//         // image: $image
//       }
//     ) {
//       data {
//         id
//         attributes {
//           title
//         }
//       }
//     }
//   }
