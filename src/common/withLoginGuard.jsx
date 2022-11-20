import { Navigate } from "react-router-dom";

export const withLoginGuard = (Component) => (params) => {
    const isLoggedIn = true;
    if (isLoggedIn) {
        return <Component {...params} />;
    } else {
        return <Navigate to="/login" />
    }
};