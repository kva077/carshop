import React from "react";
import { Link } from "react-router-dom";
import Container from "../common/container";
import headerLoginLink from "../../config/headerLoginLink.json";
import headerProtectedLink from "../../config/headerProtectedLink.json";
import NavLinks from "./navLinks";
import BusketLink from "./busketLink";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/users";

function Navbar() {
    const { items } = useSelector((state) => state.busket);

    const totalCount = items.reduce((sum, item) => sum + item.count, 0);

    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <header className="header">
            <Container>
                <div className="nav">
                    <Link to="/" className="logo">
                        <h3>Carshop Performance</h3>
                    </Link>

                    {isLoggedIn ? (
                        <NavLinks links={headerProtectedLink} />
                    ) : (
                        <NavLinks links={headerLoginLink} />
                    )}
                    <BusketLink count={totalCount} />
                </div>
            </Container>
        </header>
    );
}

export default Navbar;
