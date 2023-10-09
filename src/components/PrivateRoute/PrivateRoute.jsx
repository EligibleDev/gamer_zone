import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import PropTypes from "prop-types";
import { Spinner } from "@material-tailwind/react";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <Spinner color="[var(--red)]" className="h-16 w-16 " />
            </div>
        );
    }

    if (!user?.email) {
        return <Navigate to="/login-register/login" />;
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};
export default PrivateRoute;
