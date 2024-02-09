import { gql } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation upload($file: Upload!) {
    upload(file: $file) {
      data {
        id
        attributes{
        url
    }
      }
    }
  }
`;

export default UPLOAD_FILE