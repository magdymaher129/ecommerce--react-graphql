import { gql } from "@apollo/client";


export const REST_MUTATION=gql`

mutation reset($password:String!,$code:String!){
    resetPassword (password:$password,passwordConfirmation:$password,code:$code){
       jwt
     }
   }
   

`;