import React from "react";
import { useHistory } from "react-router-dom";
const BackHistoryButton = () => {
    const history = useHistory();
    return (
        <button className="blue-button" onClick={() => history.goBack()}>
            <span className="back-btn-span">Назад</span>
        </button>
    );
};

export default BackHistoryButton;
