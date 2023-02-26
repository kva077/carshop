import { useState, useEffect } from "react";
import { validator } from "../utils/validator";

const useForm = (initialState, validatorConfig) => {
    const [data, setData] = useState(initialState || {});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        validate();
    }, [data]);

    const isValid = Object.keys(errors).length === 0;
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    return {
        data,
        handleChange,
        errors,
        validate,
        isValid
    };
};

export default useForm;
