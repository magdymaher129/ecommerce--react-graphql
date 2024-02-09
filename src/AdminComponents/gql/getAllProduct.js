import { gql } from "@apollo/client";
//get product with dynamic values  used in pagination
export const GET_ALL_PRODUCTS = gql`
  query getAllProduct  {
    products {
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
