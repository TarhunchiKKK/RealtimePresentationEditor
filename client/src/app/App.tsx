import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Provider } from "react-redux";
import { store } from "./redux";

export function App() {
    return (
        <StrictMode>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </StrictMode>
    );
}
