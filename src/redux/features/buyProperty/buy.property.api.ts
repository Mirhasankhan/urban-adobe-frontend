import { baseApi } from "../../api/baseApi";

const buyPropertyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        buyProperty: builder.mutation({
            query: (property) => ({
                url: "/buy-property",
                method: "POST",
                body: property,
            }),
            invalidatesTags: ["buying"],
        }),
        allBuys: builder.query({
            query: (email) => ({
                url: `/all-buys?email=${email}`,
                method: "GET",
            }),
            providesTags: ["buying"],
        }),
        allSales: builder.query({
            query: (email) => ({
                url: `/sales?email=${email}`,
                method: "GET",
            }),
            providesTags: ["buying"],
        }),
        singleSupply: builder.query({
            query: (id) => ({
                url: `/sales/${id}`,
                method: "GET",
            }),
        }),
        updateBuyStatus: builder.mutation({
            query: (id) => ({
                url: `/sales/${id}`,
                method: "PUT",
            }),
            invalidatesTags: ["buying"],
        }),
        deleteSale: builder.mutation({
            query: (id) => ({
                url: `/sales/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["buying"],
        }),
    }),
});

export const {
    useBuyPropertyMutation,
    useAllBuysQuery,
    useDeleteSaleMutation,
    useSingleSupplyQuery,
    useUpdateBuyStatusMutation,
    useAllSalesQuery
} = buyPropertyApi;