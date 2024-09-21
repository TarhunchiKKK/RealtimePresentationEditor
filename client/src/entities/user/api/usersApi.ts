import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../model";

export const usersApi = createApi({
    reducerPath: "users/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/users`,
    }),

    tagTypes: ["User"],

    endpoints: (builder) => ({
        getAllUsers: builder.query<IUser[], void>({
            query: () => ({
                url: "",
            }),
            providesTags: ["User"],
        }),
        getUserById: builder.query<IUser, string>({
            query: (userId: string) => ({
                url: `/${userId}`,
            }),
        }),
    }),
});
