import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../app";
import { IProtectedRouteProps } from "./props";
import { routes } from "../../constants";

export function ProtectedRoute({ children }: IProtectedRouteProps) {
    const currentUser = useAppSelector((state) => state.user.user);

    if (!currentUser) {
        console.log("Protect");
        return <Navigate to={routes.Login} />;
    }

    return <>{children}</>;
}
