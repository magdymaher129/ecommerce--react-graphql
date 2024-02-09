import { gql, useQuery } from '@apollo/client';
import{ useEffect, useState } from 'react'
const GET_COLORS=gql`
query getcolors{
  colors{

    data{
        id
     attributes{
      title
    }
    }
  }
}
`;
export function useColor() {
    const [color,setColor]  = useState([])
    const{loading,data,error}=useQuery(GET_COLORS)
    useEffect(() => {
        if (data) {
            setColor(data.colors.data);
         
        }
        if (error) {
          console.log(error);
        }
      }, [data]);
  return {loading,color,error}
}

  