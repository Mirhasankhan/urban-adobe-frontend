// import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery '
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// https://urban-adobe-backend.vercel.app
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://urban-adobe-backend.vercel.app/api/v1",
  }),
  tagTypes: ["listing", "buying", "user"],
  endpoints: () => ({}),
});
