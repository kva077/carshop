import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getParts, loadPartsList } from "../../../../store/parts";
import { getIsAdmin } from "../../../../store/users";
import showPrice from "../../../../utils/showPrice";
import Container from "../../../common/container";

const EditPartsPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPartsList());
    }, []);
    const parts = useSelector(getParts());
    const isAdmin = useSelector(getIsAdmin());
    if (!isAdmin) {
        return <Redirect to={"/parts"} />;
    }
    return (
        <section className="edit-parts">
            <Container>
                <h2 className="head-title">Страница редактирования товаров</h2>
                <p className="parts__stock">
                    В наличии {parts.length}
                    {parts.length > 1 && parts.length < 5
                        ? " товара"
                        : " товаров"}
                </p>
                <div className="parts-grid">
                    {parts.map((part) => (
                        <div className="parts-grid__item" key={part._id}>
                            <Link
                                to={`/parts/${part._id}/edit`}
                                key={part._id}
                                id={part._id}
                            >
                                <div className="parts-grid__item-top">
                                    <img
                                        className="parts-grid__item-image"
                                        src={part.image}
                                        alt="part"
                                    />
                                </div>
                                <div className="parts-grid__body">
                                    <div className="parts-grid__body-price">
                                        {showPrice(part.price)}
                                    </div>
                                    <div className="parts-grid__body-title">
                                        {part.manufacturer} {part.name}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default EditPartsPage;
