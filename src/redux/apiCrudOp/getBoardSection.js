import baseApi from "../features/baseApi";

export const getBoardSection = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBoardSection: builder.query({
      query: (boardId) => `/boards/${boardId}`,
      providesTags: ["boards"],
    }),
  }),
});

export const { useGetBoardSectionQuery } = getBoardSection;
