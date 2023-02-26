import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../../store/users";

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
    const location = useLocation();
    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <Route
            {...rest}
            render={(props) => {
                if (
                    !isLoggedIn &&
                    location.pathname.includes("/edit", "/user")
                ) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
                return Component ? <Component {...props} /> : children;
            }}
        />
    );
};
ProtectedRoute.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    role: PropTypes.string
};

export default ProtectedRoute;
