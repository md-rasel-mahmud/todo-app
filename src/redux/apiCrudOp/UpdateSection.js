import baseApi from "../features/baseApi";

export const UpdateSection = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    UpdateSection: builder.mutation({
      query: ({ boardId, sectionId, ...sectionBody }) => ({
        url: `/boards/${boardId}/sections/${sectionId}`,
        method: "PUT",
        body: sectionBody,
      }),
      invalidatesTags: ["boards"],
    }),
  }),
});

export const { useUpdateSectionMutation } = UpdateSection;
