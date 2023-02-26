import React from "react";
import TextField from "../../common/form/textField";
import RadioField from "../../common/form/radioField";
import CheckBoxField from "../../common/form/checkBoxField";
import { useDispatch } from "react-redux";
import { signUp } from "../../../store/users";
import useForm from "../../../hooks/useForm";
import { registerValidatorConfig } from "../../../utils/validatorConfig";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const initialState = {
        email: "",
        password: "",
        name: "",
        sex: "male",
        licence: false,
        role: ""
    };

    const dispatch = useDispatch();
    const { data, handleChange, errors, validate, isValid } = useForm(
        initialState,
        registerValidatorConfig
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(signUp(data));
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
            <TextField
                label="Имя"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <RadioField
                options={[
                    { name: "Мужчина", value: "male" },
                    { name: "Женщина", value: "female" },
                    { name: "Гендерно-нейтральное существо", value: "other" }
                ]}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Выберите ваш пол"
            />
            <RadioField
                options={[
                    { name: "Администратор", value: "admin" },
                    { name: "Пользователь", value: "user" }
                ]}
                value={data.role}
                name="role"
                onChange={handleChange}
                label="Выберите уровень доступа"
            />
            <CheckBoxField
                value={data.licence}
                onChange={handleChange}
                name="licence"
                error={errors.licence}
            >
                Подтвердить <Link to="/">лицензионное соглашение</Link>
            </CheckBoxField>
            <button className="control" type="submit" disabled={!isValid}>
                Зарегистрироваться
            </button>
        </form>
    );
};

export default RegisterForm;
