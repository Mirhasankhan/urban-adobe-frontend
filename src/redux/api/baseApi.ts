// import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery '
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
    tagTypes: ["listing","buying"],
    endpoints: () => ({}),
})
