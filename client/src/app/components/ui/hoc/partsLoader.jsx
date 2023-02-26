import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataStatus, loadPartsList } from "../../../store/parts";
import Loader from "../../common/loader";

const PartsLoader = ({ children }) => {
    const dataStatus = useSelector(getDataStatus());
    const dispatch = useDispatch();

    useEffect(() => {
        if (!dataStatus) dispatch(loadPartsList());
    }, []);
    if (!dataStatus) return <Loader />;

    return children;
};

PartsLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default PartsLoader;
