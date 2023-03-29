import React from "react";
import { useParams } from "react-router-dom";
import EditWork from "../components/pages/work/editWork";
import WorkPage from "../components/pages/work/workPage";
import WorksListPage from "../components/pages/work/worksListPage";


const Works = () => {
    const params = useParams();
    const { workId, edit } = params;

    return (
        <>
            {workId ? (
                edit ? (
                    <EditWork />
                ) : (
                    <WorkPage workId={workId} />
                )
                    ) : (
                <WorksListPage />
            )}
        </>
    );
};

export default Works;
