/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// interface Product {
//     id: string;
//     ImageURL: string;
//     name: string;
//     description: string;
//     retailer: string;
//     unitPrice: number;
// }


// Define the base query
const baseQuery = fetchBaseQuery({ baseUrl: 'https://shopaisley-backend.onrender.com/' });

// Create an API slice
export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    // getHelloV1: builder.query<any, void>({
    //   query: () => "v1",
    // }),
    // getHelloV2: builder.query<any, void>({
    //   query: () => "v2",
    // }),
    getProduct: builder.query<any, void>({
        query: () => "product",
    }),
    getAProduct: builder.query<any, string>({
      query: (productId) => `product/${productId}`, // assuming the API returns a product object
    }),
    // getPost: builder.query({
    //   query: (postId) => /posts/${postId},
    // }),
  }),
});

// Export hooks for usage in functional components
export const {
    // useGetHelloV1Query,
    // useGetHelloV2Query,
    useGetProductQuery,
    useGetAProductQuery
} = appApi;
