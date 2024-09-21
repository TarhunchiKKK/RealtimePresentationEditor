import { configureStore } from "@reduxjs/toolkit";
import { usersApi, userSlice } from "../../entities/user";

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
