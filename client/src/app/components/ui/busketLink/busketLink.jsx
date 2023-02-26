import React from "react";
import { Link } from "react-router-dom";
import bag from "../../../assets/bag.svg";

const BusketLink = ({ count }) => {
    return (
        <Link to={"/busket"} className="basket basket--on">
            <img src={bag} alt="bag" />
            <span>{count}</span>
        </Link>
    );
};

export default BusketLink;
