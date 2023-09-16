import baseApi from "../features/baseApi";

export const deleteSection = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteSection: builder.mutation({
      query: ({ boardId, sectionId }) => ({
        url: `/boards/${boardId}/sections/${sectionId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["boards"],
    }),
  }),
});

export const { useDeleteSectionMutation } = deleteSection;
