import React from 'react'
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../../common/breadcrumbs";
import Container from "../../../common/container";


const WorkPage = () => {
    const params = useParams();
    const { workId } = params;

    return (
        <section className="works">
            <Breadcrumbs />
            <Container>
                <h1 className="head-title">Страница работы {workId}</h1>
            </Container>
        </section>
    )
}

export default WorkPage