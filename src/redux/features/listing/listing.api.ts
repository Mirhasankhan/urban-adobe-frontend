import { baseApi } from "../../api/baseApi";

const listingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createListing: builder.mutation({
            query: (listing) => ({
                url: "/create-listing",
                method: "POST",
                body: listing,
            }),
            invalidatesTags: ["listing"],
        }),        
        listings: builder.query({
            query: (email) => ({
                url: `/all-listings?email=${email}`,
                method: "GET",
            }),
            providesTags: ["listing"],
        }),
        singleSupply: builder.query({
            query: (id) => ({
                url: `/supplies/${id}`,
                method: "GET",
            }),
        }),
        updateSupplyStatus: builder.mutation({
            query: ({ id, isApplied }) => ({
                url: `/supplies/${id}`,
                method: "PUT",
                body: { isApplied },
            }),
            invalidatesTags: ["listing"],
        }),
        delete: builder.mutation({
            query: (id) => ({
                url: `/supplies/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["listing"],
        }),
    }),
});

export const {
    useCreateListingMutation,
    useListingsQuery,
    useDeleteMutation,
    useSingleSupplyQuery,
    useUpdateSupplyStatusMutation,
} = listingApi;