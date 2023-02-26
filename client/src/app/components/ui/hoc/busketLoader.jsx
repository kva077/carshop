import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { busketCreated } from "../../../store/busket";
import { getCurrentUserData, getIsLoggedIn } from "../../../store/users";

const BusketLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const currentUser = useSelector(getCurrentUserData());
    useEffect(() => {
        if (isLoggedIn && currentUser) {
            dispatch(busketCreated(currentUser.busket));
        }
    }, [isLoggedIn]);
    return children;
};

BusketLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default BusketLoader;
