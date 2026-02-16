// src/redux/api/subscriberApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const subscriberApi = createApi({
  reducerPath: "subscriberApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hypernex-backend.vercel.app/api" }), // backend route
  endpoints: (builder) => ({
    subscribe: builder.mutation({
      query: (email) => ({
        url: "/subscribers/subscribe",
        method: "POST",
        body: { email },
      }),
    }),
  }),
});

export const { useSubscribeMutation } = subscriberApi;
