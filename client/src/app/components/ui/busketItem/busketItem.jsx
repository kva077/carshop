import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { busketAdded, busketDecremented } from "../../../store/busket";
import showPrice from "../../../utils/showPrice";
import InputQuantity from "../../common/inputQuantity";
import BusketDeleteButton from "../busketDeleteButton";

const BusketItem = ({ item }) => {
    const { _id, image, name, price, count } = item;
    const dispatch = useDispatch();
    const handleAddProductToCart = () => {
        dispatch(busketAdded(item));
    };
    const handleRemoveProductFromCart = () => {
        dispatch(busketDecremented({ _id }));
    };

    return (
        <div className="busket-body__item">
            <div className="busket-body__item-image">
                <Link to={`/parts/${_id}`}>
                    <img src={image} alt="part" />
                </Link>
            </div>
            <div className="busket-body__item-title">
                <Link to={`/parts/${_id}`}>{name}</Link>
            </div>
            <div className="busket-body__item-count">
                <InputQuantity
                    value={count}
                    handleAdd={handleAddProductToCart}
                    handleRemove={handleRemoveProductFromCart}
                />
            </div>
            <div className="busket-body__item-price">
                {showPrice(price * count)} ₽
            </div>
            <BusketDeleteButton id={_id} />
        </div>
    );
};

export default BusketItem;
