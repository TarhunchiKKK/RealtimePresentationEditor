import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TLoginQueryArgs } from "../types";
import { IUser } from "../model";

export const usersApi = createApi({
    reducerPath: "users/api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/users`,
    }),

    endpoints: (builder) => ({
        login: builder.mutation<IUser, TLoginQueryArgs>({
            query: (queryArgs: TLoginQueryArgs) => {
                const formData = new FormData();

                formData.append("nickname", queryArgs.nickname);
                if (queryArgs.avatar) {
                    formData.append("avatar", queryArgs.avatar);
                }

                return {
                    url: "",
                    method: "POST",
                    body: { formData },
                    headers: {
                        "Content-Type": "multipart/form-data;",
                    },
                };
            },
        }),
    }),
});
