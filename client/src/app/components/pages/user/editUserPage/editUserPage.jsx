import React, { useEffect, useState } from "react";
import { validator } from "../../../../utils/validator";
import TextField from "../../../common/form/textField";
import RadioField from "../../../common/form/radioField";
import BackHistoryButton from "../../../common/backButton";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserData, updateUser } from "../../../../store/users";
import Loader from "../../../common/loader";
import Container from "../../../common/container";

const EditUserPage = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const currentUser = useSelector(getCurrentUserData());
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(updateUser(data));
    };

    useEffect(() => {
        if (currentUser && !data) {
            setData(currentUser);
        }
    }, [currentUser, data]);
    useEffect(() => {
        if (data && isLoading) {
            setIsLoading(false);
        }
    }, [data]);

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Введите ваше имя"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    return (
        <Container>
            <h2 className="head-title">Редактирование профиля</h2>
            <BackHistoryButton />
            <div className="edit-card">
                {!isLoading ? (
                    <form onSubmit={handleSubmit} className="form">
                        Имя
                        <TextField
                            label="Имя"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        Электронная почта
                        <TextField
                            label="Электронная почта"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <RadioField
                            options={[
                                { name: "Мужчина", value: "male" },
                                { name: "Женщина", value: "female" },
                                {
                                    name: "Гендерно-нейтральное существо",
                                    value: "other"
                                }
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
                        <button
                            type="submit"
                            disabled={!isValid}
                            className="control"
                        >
                            Обновить
                        </button>
                    </form>
                ) : (
                    <Loader />
                )}
            </div>
        </Container>
    );
};

export default EditUserPage;
