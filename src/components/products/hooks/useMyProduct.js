import { gql, useQuery } from "@apollo/client";

const GET_PRODUCT = gql`
  query getProducts(
    $id: [ID]=[]
    $color: [ID]=[]
    $size: [ID]=[]
    $fields: [String!]
    $limit: Int!
    $num: Int!
  ) {
    products(
      filters: {
        categories: { id: { in: $id } }
        and: { sizes: { id: { in: $size } }, colors: { id: { in: $color } } }
      }
      sort: $fields
      pagination: { pageSize: $limit, page: $num }
    ) {
      data {
        id
        attributes {
          title
          price
          colors {
            data {
              attributes {
                title
              }
            }
          }

          image {
            data {
              attributes {
                url
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

export function useMyProduct(id, color, size, fields, limit, num) {
  // if (id == 0) {
  //   id = [1, 2, 3, 4, 5];
  // }
  // if (color == 0) {
  //   color = [1, 2, 3, 4, 5];
  // }
  // if (size == 0) {
  //   size = [1, 2, 3, 4, 5];
  // }
  const { loading, data, error } = useQuery(GET_PRODUCT, {
    variables: {
      id: id,
      color: color,
      size: size,
      fields: fields,
      limit: limit,
      num: num,
    },
  });

  return { data, loading, error };
}
