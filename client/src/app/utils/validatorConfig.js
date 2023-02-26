export const loginValidatorConfig = {
    email: {
        isRequired: {
            message: "Электронная почта обязательна для заполнения"
        },
        isEmail: {
            message: "Введите корректный email"
        }
    },
    password: {
        isRequired: {
            message: "Пароль обязателен для заполнения"
        },
        minLength: {
            message: "Минимальная длина пароля - 8 символов",
            value: 8
        }
    }
};
export const registerValidatorConfig = {
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
            message: "Имя обязательно для заполнения"
        },
        min: {
            message: "Имя должно состоять минимум из 2 символов",
            value: 2
        }
    },
    password: {
        isRequired: {
            message: "Пароль обязателен для заполнения"
        },
        isCapitalSymbol: {
            message: "Пароль должен содержать хотя бы одну заглавную букву"
        },
        isContainDigit: {
            message: "Пароль должен содержать хотя бы одно число"
        },
        minLength: {
            message: "Пароль должен состоять минимум из 8 символов",
            value: 8
        }
    },
    licence: {
        isRequired: {
            message:
                "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения"
        }
    },
    role: {
        isRequired: {
            message: "Выберите уровень доступа"
        }
    }
};

export const partValidatorConfig = {
    name: {
        isRequired: {
            message: "Название обязательно для заполнения"
        },
        min: {
            message: "Название должно состоять минимум из 3 символов",
            value: 3
        }
    },
    manufacturer: {
        isRequired: {
            message: "Необходимо указать производителя"
        }
    },
    article: {
        isRequired: {
            message: "Обязательно укажите артикул"
        }
    },
    description: {
        isRequired: {
            message: "Описание обязателено для заполнения"
        },

        min: {
            message: "Описание должно состоять минимум из 3 символов",
            value: 3
        }
    },
    image: {
        isRequired: {
            message: "Обязательно укажите ссылку на изображение товара"
        }
    },
    price: {
        isRequired: {
            message: "Укажите стоимость товара"
        }
    }
};
