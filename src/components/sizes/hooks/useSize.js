import { gql, useQuery } from '@apollo/client';
import{ useEffect, useState } from 'react'
const GET_SIZES=gql`
query getsizes{
  sizes{

    data{
        id
     attributes{
      title
    }
    }
  }
}
`;
export function useSize() {
    const [size,setSize]  = useState([])
    const{loading,data,error}=useQuery(GET_SIZES)
    useEffect(() => {
        if (data) {
            setSize(data.sizes.data);
         
        }
        if (error) {
          console.log(error);
        }
      }, [data]);
  return {loading,size,error}
}

  