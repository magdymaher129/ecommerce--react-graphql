import React, { useEffect, useState } from 'react'
import { GET_PRODUCTS } from '../filter/gql/getProducts'
import { useQuery } from '@apollo/client'
import { useSelector } from 'react-redux'

function PagePaginate() {
    const [page,setPage]=useState(1)

const {data,error} = useQuery(GET_PRODUCTS)


useEffect(()=>{
    if(data)
console.log(data)
},[data])
      
  return (
    <div>

        <button onClick={()=>setPage(page+1)}>Add</button>
    </div>
  )
}

export default PagePaginate
