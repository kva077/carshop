import React from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ name, value, onChange, children, error }) => {
    const handleChange = () => {
        onChange({ name, value: !value });
    };

    return (
        <div>
            <input
                type="checkbox"
                value=""
                id={name}
                onChange={handleChange}
                checked={value}
            />{" "}
            <label htmlFor={name}>{children}</label>
            {error && <div className="input-error">{error}</div>}
        </div>
    );
};
CheckBoxField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    error: PropTypes.string
};

export default CheckBoxField;
