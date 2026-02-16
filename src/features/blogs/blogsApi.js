import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// 🔹 baseQuery with auth token
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

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery,
  tagTypes: ["Blogs"],
  endpoints: (builder) => ({

    // ======================
    // PUBLIC
    // ======================

    // Get all blogs (optionally by category)
    getBlogs: builder.query({
      query: (categorySlug) =>
        categorySlug ? `/blogs?category=${categorySlug}` : "/blogs",
      providesTags: ["Blogs"],
    }),

    // Get single blog by slug
    getBlogBySlug: builder.query({
      query: (slug) => `/blogs/${slug}`,
      providesTags: (result, error, slug) => [
        { type: "Blogs", id: slug },
      ],
    }),

    // ======================
    // ADMIN
    // ======================

    // Create blog
    createBlog: builder.mutation({
      query: (data) => ({
        url: "/blogs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Blogs"],
    }),

    // Update blog
    updateBlog: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/blogs/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Blogs"],
    }),

    // Delete blog
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blogs"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogBySlugQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogsApi;
