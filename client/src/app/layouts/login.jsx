import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/common/container";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );
    const toggleFormType = () => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };
    return (
        <section className="login">
            <Container>
                {formType === "register" ? (
                    <div className="login-card">
                        <h2 className="login-card__title">Регистрация</h2>
                        <RegisterForm />
                        <p>
                            Уже есть аккаунт?{" "}
                            <span
                                className="form__text-btn"
                                onClick={toggleFormType}
                            >
                                {" "}
                                Войти
                            </span>
                        </p>
                    </div>
                ) : (
                    <div className="login-card">
                        <h2 className="login-card__title">Войти в профиль</h2>
                        <LoginForm />
                        <p>
                            Впервые у нас?{" "}
                            <span
                                className="form__text-btn"
                                onClick={toggleFormType}
                            >
                                {" "}
                                Зарегистрироваться
                            </span>
                        </p>
                    </div>
                )}
            </Container>
        </section>
    );
};

export default Login;
