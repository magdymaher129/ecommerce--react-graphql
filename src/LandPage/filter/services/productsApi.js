import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }), // Replace with your Strapi endpoint
  endpoints: (builder) => ({
    // Define your endpoints here, e.g.:
    getProducts: builder.query({
      query: () => "/products?populate=*",// very important things for populate all fields
   
    }),
    getProduct: builder.query({
      query: (id) => ({ url: `/products/${id}` }),
    }),

    getProductsById: builder.query({
      query: (ids) => ({
        url: "/products", // Replace with your API endpoint
        method: "POST", // Assuming Strapi accepts POST for filtering
        body: {
          ids: ids, // Pass the selected IDs in the request body
        },
      }),
    }),
    // ...other endpoints
  }),
});
export const { useGetProductsQuery, useGetProductQuery } = productsApi;
