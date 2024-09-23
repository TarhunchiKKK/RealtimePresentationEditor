import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISlide } from "../model";
import { TCreateSlideQueryArgs, TRemoveSlideQueryArgs, TSaveSlideQueryArgs } from "../types";
import { requestHeaders } from "../../../shared/constants";

export const slidesApi = createApi({
    reducerPath: "slides/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/projects/slides`,
    }),

    tagTypes: ["Slides"],

    endpoints: (builder) => ({
        createSlide: builder.mutation<ISlide, TCreateSlideQueryArgs>({
            query: (queryArgs: TCreateSlideQueryArgs) => ({
                url: "",
                method: "POST",
                headers: {
                    [requestHeaders.userId]: queryArgs.userId,
                    [requestHeaders.presentationId]: queryArgs.presentationId,
                },
                body: {
                    presentation: {
                        id: queryArgs.presentationId,
                    },
                },
            }),
            invalidatesTags: ["Slides"],
        }),

        saveSlide: builder.mutation<void, TSaveSlideQueryArgs>({
            query: (queryArgs: TSaveSlideQueryArgs) => ({
                url: "/save",
                method: "PUT",
                body: queryArgs,
            }),
            invalidatesTags: ["Slides"],
        }),

        removeSlide: builder.mutation<void, TRemoveSlideQueryArgs>({
            query: (queryArgs: TRemoveSlideQueryArgs) => ({
                url: `${queryArgs.slideId}`,
                method: "DELETE",
                headers: {
                    [requestHeaders.userId]: queryArgs.userId,
                    [requestHeaders.presentationId]: queryArgs.presentationId,
                },
            }),
            invalidatesTags: ["Slides"],
        }),
    }),
});
