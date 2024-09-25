import { createBrowserRouter } from "react-router-dom";
import { routes } from "../../shared/constants";
import { EditorPage, LoginPage, ProjectsPage } from "../../pages";
import { ProtectedRoute } from "../../shared/utils";
import { DisplayTypeContextProvider } from "../../features/change-display-type";

export const router = createBrowserRouter([
    {
        path: routes.Login,
        // index: true,
        element: <LoginPage />,
    },
    {
        path: routes.Projects,
        element: (
            <ProtectedRoute>
                <DisplayTypeContextProvider>
                    <ProjectsPage />
                </DisplayTypeContextProvider>
            </ProtectedRoute>
        ),
    },
    {
        path: routes.Editor,
        element: <EditorPage />,
    },
]);
