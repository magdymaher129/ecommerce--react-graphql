import { gql, useQuery } from "@apollo/client";
import { useState } from "react";


function useLink() {

    const [links, setLinks] = useState('');
    const AllLinks = gql`
      query getLinks {
        links {
          data {
            id
            attributes {
              title
            }
          }
        }
      }
    `;
  
    const { data, error, loading } = useQuery(AllLinks, {
      onCompleted: (data) => setLinks(data.links.data),
    });
  if(links){
    // console.log(links[0].attributes.title)
  }
  return  { data, error, loading }
   
  
}

export default useLink