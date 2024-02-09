import { gql } from "@apollo/client";

const GET_USER_ROLE = gql`
  query GetUserRoles($id: ID!) {
    usersPermissionsUser(id: $id) {
      data {
        attributes {
          role {
            data {
              id
              attributes {
                name
                type
              }
            }
          }
        }
      }
    }
  }
`;
export default GET_USER_ROLE;
