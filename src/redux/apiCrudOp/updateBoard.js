import baseApi from "../features/baseApi";

export const updateBoard = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateBoard: builder.mutation({
      query: ({ boardId, ...updateData }) => ({
        url: `/boards/${boardId}`,
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: ["boards"],
    }),
  }),
});

export const { useUpdateBoardMutation } = updateBoard;
