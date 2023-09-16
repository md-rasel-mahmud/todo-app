import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_server_url,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", token ? `Bearer ${token}` : "");
      }
      return headers;
    },
  }),
  //add the token to the headers
  tagTypes: ["boards"],

  endpoints: (builder) => ({
    // authentication api
    postLoginInfo: builder.mutation({
      query: (loginAuthBody) => ({
        url: "/auth/login",
        method: "POST",
        body: loginAuthBody,
      }),
    }),
    postSignUpInfo: builder.mutation({
      query: (SignUpAuthBody) => ({
        url: "/auth/signup",
        method: "POST",
        body: SignUpAuthBody,
      }),
    }),

    // app api
    createBoard: builder.mutation({
      query: (board) => ({
        url: "/boards",
        method: "POST",
        body: board,
      }),
      invalidatesTags: ["boards"],
    }),
  }),
});

export default baseApi;
export const {
  usePostLoginInfoMutation,
  usePostSignUpInfoMutation,
  useCreateBoardMutation,
} = baseApi;
