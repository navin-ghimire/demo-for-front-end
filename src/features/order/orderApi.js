import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../constants/apis';



export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/orders`}),
  endpoints: (builder) => ({

    getAllOrders: builder.query({
      query: (query) => ({
        url: '/',
        method: 'GET',
        headers: {
          Authorization: query.token
        }
      }),
      providesTags: ['order']
    }),

    orderById: builder.query({
      query: (query) => ({
        url: `/${query.id}`,
        method: 'GET',
        headers: {
          Authorization: query.token
        }
      }),
      providesTags: ['order']
    }),

    addOrders: builder.mutation({
      query: (query) => ({
        url: '/',
        body: query.body,
        method: 'POST',
        headers: {
          Authorization: query.token
        }
      }), 
      invalidatesTags: ['order']

    }),
     

    

  })
});


export const { useGetAllOrdersQuery, useAddOrdersMutation, useOrderByIdQuery} = orderApi;