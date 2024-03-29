import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData } from "../../../store/users";
import Loader from "../../common/loader";
function NavProfile() {
    const currentUser = useSelector(getCurrentUserData());
    if (!currentUser) return <Loader />;
    return (
        <div>
            <Link to="/user" className="dropdown-item">
                Мой профиль
            </Link>
            <Link to="/logout" className="dropdown-item">
                Выйти
            </Link>
        </div>
    );
}

export default NavProfile;
