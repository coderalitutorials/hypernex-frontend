import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// 🔹 baseQuery with auth token (same pattern as blogsApi)
const baseQuery = fetchBaseQuery({
  baseUrl: "https://hypernex-backend.vercel.app/api",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth?.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery,
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({

    // ======================
    // PUBLIC
    // ======================

    // Submit contact form
    createContact: builder.mutation({
      query: (data) => ({
        url: "/contacts",
        method: "POST",
        body: data,
      }),
    }),

    // ======================
    // ADMIN
    // ======================

    // Get all contacts (dashboard)
    getContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contacts"],
    }),

    // Get single contact
    getContactById: builder.query({
      query: (id) => `/contacts/${id}`,
    }),

    // Update contact status (new → read → replied)
    updateContactStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/contacts/${id}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Contacts"],
    }),

    // Delete contact
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useCreateContactMutation,
  useGetContactsQuery,
  useGetContactByIdQuery,
  useUpdateContactStatusMutation,
  useDeleteContactMutation,
} = contactApi;
