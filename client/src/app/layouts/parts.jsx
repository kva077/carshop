import React from "react";
import { useParams } from "react-router-dom";
import EditPart from "../components/pages/part/editPart";
import PartPage from "../components/pages/part/partPage";
import PartsListPage from "../components/pages/part/partsListPage";

const Parts = () => {
    const params = useParams();
    const { partId, edit } = params;

    return (
        <>
            {partId ? (
                edit ? (
                    <EditPart />
                ) : (
                    <PartPage partId={partId} />
                )
            ) : (
                <PartsListPage />
            )}
        </>
    );
};

export default Parts;
