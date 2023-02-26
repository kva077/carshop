import React from "react";
import Breadcrumbs from "../components/common/breadcrumbs/breadcrumbs";
import Container from "../components/common/container";

const Works = () => {
    return (
        <section className="works">
            <Breadcrumbs />
            <Container>
                <h1 className="head-title">Наши работы</h1>
            </Container>
        </section>
    );
};

export default Works;
