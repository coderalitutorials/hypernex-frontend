import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const uploadApi = createApi({
  reducerPath: "uploadApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hypernex-backend.vercel.app/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    uploadBlogImage: builder.mutation({
      query: (formData) => ({
        url: "/uploads/image",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useUploadBlogImageMutation } = uploadApi;


