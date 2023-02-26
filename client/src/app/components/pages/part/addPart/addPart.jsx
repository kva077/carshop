import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPart } from "../../../../store/parts";
import TextField from "../../../common/form/textField";
import RadioField from "../../../common/form/radioField";
import SelectField from "../../../common/form/selectField";
import { validator } from "../../../../utils/validator";
import Container from "../../../common/container";
import Breadcrumbs from "../../../common/breadcrumbs/breadcrumbs";
import { Redirect } from "react-router-dom";
import { getIsAdmin } from "../../../../store/users";
import { getCategories } from "../../../../store/categories";
import { partValidatorConfig } from "../../../../utils/validatorConfig";

const AddPart = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        category: "",
        manufacturer: "",
        article: "",
        description: "",
        image: "",
        price: "",
        stock: "true"
    });
    const categories = useSelector(getCategories());
    const categoriesList = categories.map((c) => ({
        label: c.name,
        value: c._id
    }));
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, partValidatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        dispatch(createPart(data));
    };
    const isAdmin = useSelector(getIsAdmin());
    if (!isAdmin) {
        return <Redirect to={"/parts"} />;
    }
    return (
        <section className="add-part">
            <Breadcrumbs />
            <Container>
                <h1>Добавление продукта</h1>
                <div className="edit-card">
                    <form onSubmit={handleSubmit} className="form">
                        <TextField
                            label="Наименование"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <TextField
                            label="Производитель"
                            name="manufacturer"
                            value={data.manufacturer}
                            onChange={handleChange}
                            error={errors.manufacturer}
                        />
                        <TextField
                            label="Артикул"
                            name="article"
                            value={data.article}
                            onChange={handleChange}
                            error={errors.article}
                        />
                        <TextField
                            label="Описание"
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                            error={errors.description}
                        />
                        <TextField
                            label="Ссылка на изображение"
                            name="image"
                            value={data.image}
                            onChange={handleChange}
                            error={errors.image}
                        />
                        <TextField
                            label="Цена"
                            name="price"
                            value={data.price}
                            onChange={handleChange}
                            error={errors.price}
                        />
                        <SelectField
                            label="Выберите категорию"
                            defaultValue={data.category}
                            value={data.category}
                            options={categoriesList}
                            onChange={handleChange}
                            name="category"
                            error={errors.category}
                        />
                        <RadioField
                            options={[
                                { name: "В наличии", value: "true" },
                                { name: "Под заказ", value: "false" }
                            ]}
                            value={data.stock}
                            name="stock"
                            onChange={handleChange}
                            label="Укажите наличие"
                        />
                        <button
                            className="control"
                            type="submit"
                            disabled={!isValid}
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default AddPart;
