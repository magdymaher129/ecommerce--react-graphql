import { gql } from "@apollo/client";

export const SIGNUP__MUTATION=gql`
mutation SignUp($username: String!, $password: String!,$email:String!) {
    register ( input:{username:$username,password:$password,email:$email}) {
      
       jwt
   }
     }
   
`;