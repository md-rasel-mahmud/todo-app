import baseApi from "../features/baseApi";

export const createSection = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSection: builder.mutation({
      query: ({ id, ...sectionBody }) => ({
        url: `/boards/${id}/sections`,
        method: "POST",
        body: sectionBody,
      }),
      invalidatesTags: ["boards"],
    }),
  }),
});

export const { useCreateSectionMutation } = createSection;
