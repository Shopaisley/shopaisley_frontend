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
const baseQuery = fetchBaseQuery({
  baseUrl: "https://shopaisley-backend.onrender.com/",
});

// Create an API slice
export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getProduct: builder.query<any, void>({
      query: () => "product",
    }),
    getAProduct: builder.query<any, string>({
      query: (productId) => `product/${productId}`,
    }),
    getAMerchant: builder.query<any, string>({
      query: (merchantId) => `merchant/${merchantId}`,
    }),
    getMerchantName: builder.query<any, string>({
      query: () => "merchant",
    }),
    getPostMerchantIds: builder.mutation<any, { merchantIds: string[] }>({
      query: (merchantIds) => ({
        url: "merchant",
        method: "POST",
        body: { merchantIds },
      }),
    }),
    signIn: builder.mutation<any, { email: string, password: string }>({
      query: ({ email, password }) => ({
        url: "auth/signin",
        method: "POST",
        body: { email, password },
      }),
    }),

    // getPost: builder.query({
    //   query: (postId) => /posts/${postId},
    // }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetProductQuery,
  useGetAProductQuery,
  useGetAMerchantQuery,
  useGetPostMerchantIdsMutation,
  useSignInMutation
} = appApi;
