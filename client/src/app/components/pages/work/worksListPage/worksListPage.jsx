import React from 'react'
import Breadcrumbs from '../../../common/breadcrumbs'
import Container from '../../../common/container'

const WorksListPage = () => {
    return (
        <section className="works">
            <Breadcrumbs />
            <Container>
                <h1 className="head-title">Наши работы</h1>
            </Container>
        </section>
    )
}

export default WorksListPage