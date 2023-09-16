import baseApi from "../features/baseApi";

export const deleteBoard = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteBoard: builder.mutation({
      query: (id) => ({
        url: `/boards/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["boards"],

      // async onQueryStarted(id, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data } = await queryFulfilled;

      //     console.log(data);
      //     dispatch(
      //       deleteBoard.util.updateQueryData("getBoard", undefined, (draft) => {
      //         draft.data = draft.data.filter((item) => item._id !== id);
      //       })
      //     );
      //     return data;
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
    }),
  }),
});

export const { useDeleteBoardMutation } = deleteBoard;
