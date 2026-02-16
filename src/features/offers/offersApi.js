// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const offersApi = createApi({
//   reducerPath: "offersApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/offers" }),
//   tagTypes: ["Offers"],
//   endpoints: (builder) => ({
//     getOffers: builder.query({
//       query: () => "/",
//       providesTags: (result) =>
//         result
//           ? [
//               ...result.data.map(({ _id }) => ({ type: "Offers", id: _id })),
//               { type: "Offers", id: "LIST" },
//             ]
//           : [{ type: "Offers", id: "LIST" }],
//       // ✅ Force refetch on mount to avoid 304 stale cache
//       refetchOnMountOrArgChange: true,
//     }),
//     getOffer: builder.query({
//       query: (id) => `/${id}`,
//       providesTags: (result, error, id) => [{ type: "Offers", id }],
//     }),
//     createOffer: builder.mutation({
//       query: (data) => ({
//         url: "/",
//         method: "POST",
//         body: data,
//       }),
//       invalidatesTags: [{ type: "Offers", id: "LIST" }],
//     }),
//     updateOffer: builder.mutation({
//       query: ({ id, ...data }) => ({
//         url: `/${id}`,
//         method: "PUT",
//         body: data,
//       }),
//       invalidatesTags: (result, error, { id }) => [
//         { type: "Offers", id },
//         { type: "Offers", id: "LIST" },
//       ],
//     }),
//     deleteOffer: builder.mutation({
//       query: (id) => ({
//         url: `/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: [{ type: "Offers", id: "LIST" }],
//     }),
//   }),
// });

// export const {
//   useGetOffersQuery,
//   useGetOfferQuery,
//   useCreateOfferMutation,
//   useUpdateOfferMutation,
//   useDeleteOfferMutation,
// } = offersApi;










import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const offersApi = createApi({
  reducerPath: "offersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hypernex-backend.vercel.app/api/offers",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token; // Redux se token le raha
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Offers"],
  endpoints: (builder) => ({
    getOffers: builder.query({
      query: () => "/",
      providesTags: ["Offers"],
    }),
    getOffer: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: "Offers", id }],
    }),
    createOffer: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Offers"], // mutation ke baad offers auto refetch
    }),
    updateOffer: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Offers"],
    }),
    deleteOffer: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Offers"],
    }),
  }),
});

export const {
  useGetOffersQuery,
  useGetOfferQuery,
  useCreateOfferMutation,
  useUpdateOfferMutation,
  useDeleteOfferMutation,
} = offersApi;
