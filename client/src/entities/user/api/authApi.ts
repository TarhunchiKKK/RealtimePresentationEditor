import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { TLoginQueryArgs } from "../types";
import { IUser } from "../model";

export const authApi = {
    useLoginMutation: () => {
        const [isLoading, setIsLoading] = useState<boolean>(false);

        const login = async (queryArgs: TLoginQueryArgs) => {
            try {
                setIsLoading(true);

                const formData = new FormData();
                formData.append("nickname", queryArgs.nickname);
                if (queryArgs.avatar) {
                    formData.append("avatar", queryArgs.avatar);
                }

                const response = await axios.post<void, AxiosResponse<IUser>>(
                    `${import.meta.env.VITE_SERVER_URL}/api/users`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    },
                );

                return {
                    data: response.data,
                };
            } catch (_: unknown) {
                return {
                    data: null,
                };
            } finally {
                setIsLoading(false);
            }
        };

        return [login, { isLoading }] as const;
    },
};
