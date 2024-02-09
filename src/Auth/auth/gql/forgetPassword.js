import { gql } from "@apollo/client";

export const FORGET_PASSWORD = gql`
  mutation forgetpassword($email: String!) {
    forgotPassword(email: $email) {
      ok
    }
  }
`;
