import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import {
    getCategories,
    getCategoriesLoadingStatus
} from "../../../../store/categories";
import { getPartById, removePart, updatePart } from "../../../../store/parts";
import { getIsAdmin } from "../../../../store/users";
import BackHistoryButton from "../../../common/backButton";
import Container from "../../../common/container";
import SelectField from "../../../common/form/selectField";
import RadioField from "../../../common/form/radioField";
import TextField from "../../../common/form/textField";
import Loader from "../../../common/loader";
import { partValidatorConfig } from "../../../../utils/validatorConfig";
import { validator } from "../../../../utils/validator";
import PartsLoader from "../../../ui/hoc/partsLoader";

const EditPart = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const pathName = location.pathname;
    const partId = pathName.replace("/parts/", "").replace("/edit", "");
    const part = useSelector(getPartById(partId));
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const [errors, setErrors] = useState({});

    const isAdmin = useSelector(getIsAdmin());

    const categories = useSelector(getCategories());
    const categoriesLoading = useSelector(getCategoriesLoadingStatus());
    const categoriesList = categories.map((c) => ({
        label: c.name,
        value: c._id
    }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(updatePart(data));
    };

    useEffect(() => {
        if (part && !data && !categoriesLoading) {
            setData({ ...part });
        }
    }, [part, data, categoriesLoading]);
    useEffect(() => {
        validate();
    }, [data]);
    useEffect(() => {
        if (data && isLoading) {
            setIsLoading(false);
        }
    }, [data]);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const handleRemove = () => {
        dispatch(removePart(partId));
    };

    const validate = () => {
        const errors = validator(data, partValidatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    if (!isAdmin) {
        return <Redirect to={"/parts"} />;
    }
    return (
        <PartsLoader>
            <section className="edit-part">
                <Container>
                    <h2 className="head-title">Изменение продукта</h2>
                    <BackHistoryButton />
                    <button className="btn-delete" onClick={handleRemove}>
                        Удалить товар
                    </button>
                    <div className="edit-card">
                        {!isLoading ? (
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
                                    value={data.price.toString()}
                                    onChange={handleChange}
                                    error={errors.price}
                                />
                                <SelectField
                                    label="Выберите категории"
                                    name="category"
                                    defaultValue={data.category}
                                    value={data.category}
                                    options={categoriesList}
                                    onChange={handleChange}
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
                        ) : (
                            <Loader />
                        )}
                    </div>
                </Container>
            </section>
        </PartsLoader>
    );
};

export default EditPart;
