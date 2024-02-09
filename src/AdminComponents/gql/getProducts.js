import { gql } from "@apollo/client";
//get product with dynamic values  used in pagination
export const GET_PRODUCTS = gql`
  query getProduct($pageSize: Int, $page: Int) {
    products(pagination: { pageSize: $pageSize, page: $page }) {
      data {
      id
      attributes {
        title
        price
         sizes{
          data{
            id
            attributes{
              title
            }
            
          }
          
        }
        colors{
          data{
            id
            attributes{
              title
            }
          }
        }
        image{
          data{
            id
            attributes{
              url
            }
          }
        }
       desc
        brands{
          data{
            id
            attributes{
              title
            }
          }
        }
      }
    }
    meta{
      pagination{
        total
        pageSize
        pageCount
      }
    }
  }
}

`;
