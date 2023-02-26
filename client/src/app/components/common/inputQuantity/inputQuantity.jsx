import React from "react";

const InputQuantity = ({ value, handleAdd, handleRemove }) => {
    return (
        <div className="input-number">
            <button type="button" onClick={handleRemove}>
                -
            </button>
            <input value={value} min={1} />
            <button type="button" onClick={handleAdd}>
                +
            </button>
        </div>
    );
};

export default InputQuantity;
