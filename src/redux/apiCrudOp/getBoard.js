import baseApi from "../features/baseApi";

export const getBoard = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBoard: builder.query({
      query: () => "/boards",
      providesTags: ["boards"],
    }),
  }),
});

export const { useGetBoardQuery } = getBoard;
