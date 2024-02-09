import { gql } from "@apollo/client";

const GET_BRAND_BY_PAGE=gql`
query getBrand($pageSize: Int, $page: Int){
    brands(pagination: { pageSize: $pageSize, page: $page }){
      data{
        id
        attributes{
          title
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
  }`;

export default GET_BRAND_BY_PAGE