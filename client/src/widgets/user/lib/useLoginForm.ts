import { FormEvent, useState } from "react";
import { authApi, userSlice } from "../../../entities/user";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../shared/constants";

export function useLoginForm() {
    const navigate = useNavigate();

    const [login, { isLoading }] = authApi.useLoginMutation();

    const [nickname, setNickname] = useState<string>("");
    const [avatar, setAvatar] = useState<File | null>(null);

    const handleNicknameChange = (newNickname: string) => {
        setNickname(newNickname);
    };

    const handleAvatarChange = (newAvatar: File | null) => {
        setAvatar(newAvatar);
    };

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("nickname", nickname);
        if (avatar) {
            formData.append("avatar", avatar);
        }

        const { data: user } = await login({ nickname, avatar });
        if (user) {
            userSlice.actions.setUser(user);
            navigate(routes.Projects);
        }
    };

    return {
        nickname,
        avatar,
        handleNicknameChange,
        handleAvatarChange,
        handleLogin,
        isLoading,
    };
}
