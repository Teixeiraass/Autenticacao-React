import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({children}: PropsWithChildren) => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}

export default ProtectRoute;