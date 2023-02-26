import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getPartById } from "../../../../store/parts";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../common/loader";
import Container from "../../../common/container";
import Breadcrumbs from "../../../common/breadcrumbs";
import {
    busketAdded,
    busketDecremented,
    busketRemoved
} from "../../../../store/busket";
import InputQuantity from "../../../common/inputQuantity";
import {
    getCategoriesLoadingStatus,
    getCategoryById,
    loadCategoriesList
} from "../../../../store/categories";
import showPrice from "../../../../utils/showPrice";

const PartPage = ({ partId }) => {
    const part = useSelector(getPartById(partId));
    const dispatch = useDispatch();
    const busketItem = useSelector((state) =>
        state.busket.items.find((item) => item._id === partId)
    );
    const addedCount = busketItem ? busketItem.count : 0;
    const handleAddProductToCart = () => {
        // const item = { _id, image, name, manufacturer, price };
        dispatch(busketAdded(part));
    };

    const handleRemoveProductFromCart = () => {
        if (addedCount === 1) {
            dispatch(busketRemoved(partId));
        }
        dispatch(busketDecremented(part));
    };
    const isLoading = useSelector(getCategoriesLoadingStatus());
    useEffect(() => {
        dispatch(loadCategoriesList());
    }, []);
    const category = useSelector(getCategoryById(part.category));
    if (part && !isLoading) {
        return (
            <section className="part">
                <Container>
                    <Breadcrumbs />
                    <div className="part-detail">
                        <div className="part-detail__image">
                            <img src={part.image} alt="part" />
                        </div>
                        <div className="part-detail__side">
                            <h2>{part.manufacturer}</h2>
                            <h2>{part.name}</h2>
                            <h3 className="part-detail__side-price">
                                {showPrice(part.price)} ₽
                            </h3>
                            <div className="part-detail__side-busket">
                                {addedCount > 0 ? (
                                    <InputQuantity
                                        value={addedCount}
                                        handleAdd={handleAddProductToCart}
                                        handleRemove={
                                            handleRemoveProductFromCart
                                        }
                                    />
                                ) : (
                                    <div className="parts-grid__body-button">
                                        <button
                                            className="blue-button"
                                            id={partId}
                                            onClick={handleAddProductToCart}
                                        >
                                            В корзину
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="part-detail__desc">
                            <h1>Описание:</h1>
                            <span>{part.description}</span>
                            <h3>Категория:</h3>
                            <span>{category.name}</span>
                        </div>
                    </div>
                </Container>
            </section>
        );
    } else {
        return <Loader />;
    }
};

PartPage.propTypes = {
    partId: PropTypes.string.isRequired
};

export default PartPage;
