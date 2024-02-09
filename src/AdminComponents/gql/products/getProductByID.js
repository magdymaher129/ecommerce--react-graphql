import { gql } from "@apollo/client";

  const GET_PRODUCT_BY_ID=gql`
  query get_Product_by_id($id:ID!){
  product(id:$id){
    data{
      attributes{
        title
        price
        desc
        categories{
          data{
            id
            attributes{
              title
            }
          }
          
        }
        brands{
          
          data{
            id
            attributes{
              title
            }
          }
        }
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
       
      }
    }
  }
}
  `
  ;

  export default GET_PRODUCT_BY_ID