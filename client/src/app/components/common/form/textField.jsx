import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div>
            <div className={type === "password" ? "password" : ""}>
                <input
                    type={showPassword ? "text" : type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className="control"
                    placeholder={label}
                />
                {type === "password" && (
                    <span
                        className={`toggle` + (showPassword ? " showing" : "")}
                        type="button"
                        onClick={toggleShowPassword}
                    ></span>
                )}
            </div>
            <div>{error && <div className="input-error">{error}</div>}</div>
        </div>
    );
};
TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextField;
