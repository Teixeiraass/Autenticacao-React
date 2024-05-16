import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({children}: PropsWithChildren) => {
    const token = localStorage.getItem('accessToken');

    if (token) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
}

export default PublicRoute;