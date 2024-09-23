import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPresentation } from "../model";
import {
    TCreatePresentationQueryArgs,
    TGetPresentationsQueryArgs,
    TRemovePresentationQueryArgs,
} from "../types";
import { requestHeaders } from "../../../shared/constants";

export const presentationsApi = createApi({
    reducerPath: "presentations/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/projects/presentations`,
    }),

    tagTypes: ["Presentations"],

    endpoints: (builder) => ({
        getAllPresentations: builder.query<IPresentation[], TGetPresentationsQueryArgs>({
            query: (queryArgs: TGetPresentationsQueryArgs) => ({
                url: "",
                params: {
                    page: queryArgs.page,
                    count: queryArgs.count,
                },
            }),
            providesTags: ["Presentations"],
        }),

        getPresentationById: builder.query<IPresentation, string>({
            query: (presentationId: string) => ({
                url: `/${presentationId}`,
            }),
        }),

        createPresentation: builder.mutation<IPresentation, TCreatePresentationQueryArgs>({
            query: (queryArgs: TCreatePresentationQueryArgs) => ({
                url: "",
                method: "POST",
                body: queryArgs,
            }),
            invalidatesTags: ["Presentations"],
        }),

        removePresentation: builder.mutation<void, TRemovePresentationQueryArgs>({
            query: (queryArgs: TRemovePresentationQueryArgs) => ({
                url: `/${queryArgs.presentationId}`,
                method: "DELETE",
                headers: {
                    [requestHeaders.userId]: queryArgs.userId,
                    [requestHeaders.presentationId]: queryArgs.presentationId,
                },
            }),
            invalidatesTags: ["Presentations"],
        }),
    }),
});
