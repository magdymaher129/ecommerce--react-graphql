import { gql } from "@apollo/client";
// import { useSelector } from "react-redux";




export const GET_All_PRODUCTS=gql`
query getProduct($cat:[ID] =[],$color:[ID]=[], $size:[ID]=[],$pageSize:Int ,$page:Int) {
  products(filters:{categories:{id:{in:$cat }}  and: {colors:{id:{in:$color}}
  
  and: {sizes:{id:{in:$size}}}}
 
  } pagination:{pageSize:$pageSize ,page:$page})
   
    
   
    {
    data {
      id
      attributes {
        title
        price
        sizes {
          data {
            id
            attributes {
              title
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
        brands {
          data {
            id
            attributes {
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
        colors {
          data {
            id
            attributes {
              title
            }
          }
        }
        desc
        brands {
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
        pageSize
        pageCount
      }
    }
  }
} `