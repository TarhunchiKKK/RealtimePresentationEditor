import { configureStore } from "@reduxjs/toolkit";
import { usersApi, userSlice } from "../../entities/user";
import { presentationsApi, slidesApi } from "../../entities/presentations";

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [slidesApi.reducerPath]: slidesApi.reducer,
        [presentationsApi.reducerPath]: presentationsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(usersApi.middleware)
            .concat(slidesApi.middleware)
            .concat(presentationsApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
