import React from "react";
import TextField from "../../common/form/textField";
import CheckBoxField from "../../common/form/checkBoxField";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthErrors, login } from "../../../store/users";
import useForm from "../../../hooks/useForm";
import { loginValidatorConfig } from "../../../utils/validatorConfig";

const initialState = {
    email: "",
    password: "",
    stayOn: false
};

const LoginForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { data, handleChange, errors, validate, isValid } = useForm(
        initialState,
        loginValidatorConfig
    );

    const loginError = useSelector(getAuthErrors());
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const redirect = history.location.state
            ? history.location.state.from.pathname
            : "/";

        dispatch(login({ payload: data, redirect }));
    };
    return (
        <form onSubmit={handleSubmit} className="form">
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <div id="spinner" className="spinner"></div>
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <CheckBoxField
                value={data.stayOn}
                onChange={handleChange}
                name="stayOn"
            >
                Запомнить меня
            </CheckBoxField>
            {loginError && <p className="text-danger">{loginError}</p>}
            <button className="control" type="submit" disabled={!isValid}>
                Войти
            </button>
        </form>
    );
};

export default LoginForm;
