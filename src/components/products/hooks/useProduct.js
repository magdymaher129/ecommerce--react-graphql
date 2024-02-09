import { gql, useLazyQuery } from "@apollo/client";
import { ITEM_PER_PAGE } from "../../../constants/constant";

const GET_PRODUCT = gql`
  query getproducts(
    $id: [ID!]
    $price: Float!
    $size: [ID!]
    $color: [ID!]
    $fields: [String!]
  ) {
    products(
      sort: $fields
      filters: {
        categories: { id: { in: $id } }
        and: {
          price: { lt: $price }
          sizes: { id: { in: $size } }
          colors: { id: { in: $color } }
        }
      }
    ) {
      data {
        id
        attributes {
          title
          price
          image {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              id
              attributes {
                title
              }
            }
          }
          colors {
            data {
              id
              attributes {
                title
              }
            }
          }
          sizes {
            data {
              id
              attributes {
                title
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
          pageCount
          pageSize
        }
      }
    }
  }
`;
export function useProduct(id, price, color, size, fields, num) {
  const [loaders, { loading, data, error }] = useLazyQuery(GET_PRODUCT, {
    variables: {
      id,
      price: price,
      color: color,
      size: size,
      fields: fields,
      num: num,
      pageSize: ITEM_PER_PAGE,
    },
  });

  return [loaders, { data, loading, error }];
}
