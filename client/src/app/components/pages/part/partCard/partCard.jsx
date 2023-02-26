import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    busketAdded,
    busketDecremented,
    busketRemoved
} from "../../../../store/busket";
import InputQuantity from "../../../common/inputQuantity";
import showPrice from "../../../../utils/showPrice";

const PartCard = ({ _id, image, name, manufacturer, price }) => {
    const dispatch = useDispatch();
    const busketItem = useSelector((state) =>
        state.busket.items.find((item) => item._id === _id)
    );
    const addedCount = busketItem ? busketItem.count : 0;
    const item = { _id, image, name, manufacturer, price };
    const handleAddProductToCart = () => {
        dispatch(busketAdded(item));
    };

    const handleRemoveProductFromCart = () => {
        if (addedCount === 1) {
            dispatch(busketRemoved(_id));
        }
        dispatch(busketDecremented(item));
    };

    return (
        <div className="parts-grid__item">
            <Link to={`/parts/${_id}`} key={_id}>
                <div className="parts-grid__item-top">
                    <img
                        className="parts-grid__item-image"
                        src={image}
                        alt="part"
                    />
                </div>
                <div className="parts-grid__body">
                    <div className="parts-grid__body-price">
                        {showPrice(price)} ₽
                    </div>
                    <div className="parts-grid__body-title">
                        {manufacturer} {name}
                    </div>
                </div>
            </Link>
            <div className="parts-grid__body-button">
                {addedCount > 0 ? (
                    <InputQuantity
                        value={addedCount}
                        handleAdd={handleAddProductToCart}
                        handleRemove={handleRemoveProductFromCart}
                    />
                ) : (
                    <button
                        className="blue-button"
                        id={_id}
                        onClick={handleAddProductToCart}
                    >
                        В корзину
                    </button>
                )}
                {/* <BusketButton partId={_id} /> */}
            </div>
        </div>
    );
};

export default PartCard;
