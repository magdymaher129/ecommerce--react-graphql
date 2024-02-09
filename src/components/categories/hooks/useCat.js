import { gql, useQuery } from '@apollo/client';
import  { useEffect, useState } from 'react'
const GET_CATEGORIES=gql`
query getcategories{
  categories{

    data{
        id
     attributes{
      title
    }
    }
  }
}
`;
export function useCat() {
    const [cat,setCat]  = useState([])
    const{loading,data,error}=useQuery(GET_CATEGORIES)
    useEffect(() => {
        if (data) {
          setCat(data.categories.data);
         
        }
        if (error) {
          console.log(error);
        }
      }, [data]);
  return {loading,cat,error}
}

  