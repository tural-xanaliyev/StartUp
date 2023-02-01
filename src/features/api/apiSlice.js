import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Products", "Users"],
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({}),
});
