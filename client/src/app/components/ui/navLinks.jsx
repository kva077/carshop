import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData } from "../../store/users";

const NavLinks = ({ links }) => {
    const currentUser = useSelector(getCurrentUserData());

    return (
        <ul className="menu">
            {links.map((link) => (
                <li key={link.id} className="menu__list">
                    <Link
                        to={
                            currentUser && link.path === "/user"
                                ? link.path + `/${currentUser._id}`
                                : link.path
                        }
                        className="menu__link"
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
