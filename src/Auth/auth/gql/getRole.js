import { gql } from "@apollo/client"

export const GET_ROLE = gql`
query GetRoles($id:ID!) {
    usersPermissionsUser(id:$id ) {
     data{
      attributes{
        role{
          
          data{
            id
            attributes{
              name
              type
            }
          }
        }
      }
    }
    }
  }`;