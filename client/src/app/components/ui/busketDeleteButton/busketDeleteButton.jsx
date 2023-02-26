import React from "react";
import { useDispatch } from "react-redux";
import { busketRemoved } from "../../../store/busket";

const BusketDeleteButton = ({ id }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(busketRemoved(id));
    };
    return (
        <button
            className="busket-body__item-controls btn-delete"
            type="button"
            onClick={handleDelete}
        >
            Убрать
        </button>
    );
};

export default BusketDeleteButton;
