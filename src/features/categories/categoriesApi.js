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

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery,
  tagTypes: ["Categories"],
  endpoints: (builder) => ({

    // ======================
    // PUBLIC
    // ======================

    // Get all categories (for dropdowns)
    getCategories: builder.query({
      query: () => "/categories",
      providesTags: ["Categories"],
    }),

    // ======================
    // ADMIN
    // ======================

    // Create category
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),

    // Update category
    updateCategory: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/categories/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),

    // Delete category
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoriesApi;
