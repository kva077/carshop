import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../components/common/breadcrumbs/breadcrumbs";
import Container from "../components/common/container";
import Search from "../components/common/search";
import BusketItem from "../components/ui/busketItem/busketItem";
import { busketCleaned } from "../store/busket";
import {
    getCurrentUserData,
    getIsLoggedIn,
    updateUsersBusket
} from "../store/users";
import showPrice from "../utils/showPrice";

const Busket = () => {
    const dispatch = useDispatch();
    const { items, totalPrice } = useSelector((state) => state.busket);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);
    const [searchedValue, setSearchedValue] = useState("");

    const handleSearchedValue = ({ target }) => {
        setSearchedValue(target.value);
    };

    const isLoggedIn = useSelector(getIsLoggedIn());
    const currentUserData = useSelector(getCurrentUserData());

    const handleClean = () => {
        dispatch(busketCleaned());
    };

    useEffect(() => {
        const busketJson = JSON.stringify(items);
        localStorage.setItem("busket", busketJson);
        if (isLoggedIn) {
            const busket = items;
            dispatch(updateUsersBusket({ ...currentUserData, busket }));
        }
    }, [items]);
    const searchedProducts = searchedValue
        ? items.filter(
              (part) =>
                  part.name
                      .toLowerCase()
                      .indexOf(searchedValue.toLowerCase()) !== -1
          )
        : items;
    const products = searchedProducts.map((p) => {
        return <BusketItem item={p} key={p._id} />;
    });
    const search = items.length ? (
        <Search
            searchedValue={searchedValue}
            setSearchedValue={setSearchedValue}
            handleSearchedValue={handleSearchedValue}
        />
    ) : null;

    return (
        <section className="busket">
            <Breadcrumbs />
            <Container>
                <div className="busket-title">
                    <h1>Корзина товаров</h1>
                </div>
                {search}
                {items.length ? (
                    <div className="busket-clean">
                        <span
                            className="busket-clean__btn"
                            onClick={handleClean}
                        >
                            Очистить корзину
                        </span>
                    </div>
                ) : null}
                {items.length ? (
                    <div className="busket-table">
                        <div className="busket-table__top">
                            <div className="busket-table__title">
                                Наименование
                            </div>
                            <div className="busket-table__count">
                                Количество
                            </div>
                            <div className="busket-table__cost">Стоимость</div>
                        </div>
                        <div className="busket-body">{products}</div>
                        <div className="busket-footer">
                            <div className="busket-footer__count">
                                {totalCount} единиц
                            </div>
                            <div className="busket-footer__price">
                                {showPrice(totalPrice)} ₽
                            </div>
                        </div>
                    </div>
                ) : (
                    <h3 className="busket-title">Ваша корзина пуста</h3>
                )}
            </Container>
        </section>
    );
    // }
};

export default Busket;
