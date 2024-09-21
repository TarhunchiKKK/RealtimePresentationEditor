import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../model";

type TUserState = {
    user: IUser | null;
};

const initialState: TUserState = {
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload;
        },
        resetUser(state) {
            state.user = null;
        },
    },
});
