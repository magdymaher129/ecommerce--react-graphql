import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const strapiApi = createApi({
    reducerPath: 'strapiApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api' }), // Replace with your Strapi endpoint
    endpoints: (builder) => ({
      // Define your endpoints here, e.g.:
      getBrands: builder.query({
        query: () => '/brands?populate=*',
       
      }),

      getProducts: builder.query({
        query: () => "/products?populate=*",
      
     
       
      }),

      // ...other endpoints
    }),
});



    export const { useGetBrandsQuery, useGetProductsQuery } = strapiApi;