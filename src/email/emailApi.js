import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emailApi = createApi({
  reducerPath: "emailApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hypernex-backend.vercel.app/api" }),
  endpoints: (builder) => ({
    sendEmail: builder.mutation({
      query: (formData) => ({
        url: "/email",          // backend route
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useSendEmailMutation } = emailApi;
