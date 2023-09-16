import baseApi from "../features/baseApi";

export const getSingleBoard = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleBoard: builder.query({
      query: (boardId) => `/boards/${boardId}`,
      providesTags: ["boards"],
    }),
  }),
});

export const { useGetSingleBoardQuery } = getSingleBoard;
