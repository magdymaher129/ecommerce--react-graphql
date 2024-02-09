import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation loginUser(
    $identifier: String!
    $password: String!
    $provider: String = "local"
  ) {
    login(
      input: {
        identifier: $identifier
        password: $password
        provider: $provider
      }
    ) {
        jwt
        user {
          id
          username
          email
          role {
            name
          }
        }
      }
    }
`;

export default LOGIN_USER;
