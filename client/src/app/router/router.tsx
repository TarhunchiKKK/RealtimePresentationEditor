import { createBrowserRouter } from "react-router-dom";
import { routes } from "../../shared/constants";
import { EditorPage, LoginPage } from "../../pages";

export const router = createBrowserRouter([
    {
        path: routes.Login,
        element: <LoginPage />,
        children: [],
    },
    {
        path: routes.Editor,
        element: <EditorPage />,
    },
]);
