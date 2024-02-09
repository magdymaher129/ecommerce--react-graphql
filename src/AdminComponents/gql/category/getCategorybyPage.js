import { gql } from "@apollo/client";

const GET_Category_BY_PAGE=gql`
query getCategory($pageSize: Int, $page: Int){
    categories(pagination: { pageSize: $pageSize, page: $page }){
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

export default GET_Category_BY_PAGE