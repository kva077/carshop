import React from "react";
import Container from "../container";
import { Link, useLocation } from "react-router-dom";
import breadCrumbsLinks from "../../../config/breadCrumbsLinks.json";

const Breadcrumbs = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const arrayPathName = pathName.split("/").filter((x) => x);
    const breadcrumbsArray = arrayPathName.map((name, index) => {
        const path = "/" + arrayPathName.slice(0, index + 1).join("/");
        const indexOfText = breadCrumbsLinks.findIndex((n) => n.path === path);
        const text = breadCrumbsLinks[indexOfText]?.name;
        return { text, path };
    });

    return (
        <div className="breadcrumbs">
            <Container>
                <div className="breadcrumbs__container">
                    <Link to={"/"} className={"breadcrumbs__item"}>
                        Домой
                    </Link>
                    {" /"}

                    {breadcrumbsArray.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={"breadcrumbs__item"}
                        >
                            {item.text}
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Breadcrumbs;
