import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../../store/categories";
import {
    getParts,
    loadPartsList,
    partsSortedByDec,
    partsSortedByInc
} from "../../../../store/parts";
import {
    getCurrentUserData,
    getIsLoggedIn,
    updateUsersBusket
} from "../../../../store/users";
import Breadcrumbs from "../../../common/breadcrumbs";
import CategoriesList from "../../../common/categoriesList/categoriesList";
import Container from "../../../common/container";
import Search from "../../../common/search";
import Sort from "../../../common/sort/sort";
import PartCard from "../partCard/partCard";

const PartsListPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPartsList());
    }, []);
    const parts = useSelector(getParts());
    const currentUser = useSelector(getCurrentUserData());
    const isLoggedIn = useSelector(getIsLoggedIn());
    const categories = useSelector(getCategories());
    const [searchedValue, setSearchedValue] = useState("");
    const [selectedCategory, setSelectedCategory] = useState();

    const handleCategorySelect = (item) => {
        if (searchedValue !== "") setSearchedValue("");
        setSelectedCategory(item._id);
    };
    const handleSearchedValue = ({ target }) => {
        setSelectedCategory("");
        setSearchedValue(target.value);
    };
    const { items } = useSelector((state) => state.busket);
    const isMounted = useRef(false);
    useEffect(() => {
        if (isMounted.current) {
            const busketJson = JSON.stringify(items);
            localStorage.setItem("busket", busketJson);
            if (isLoggedIn) {
                const busket = items;
                dispatch(updateUsersBusket({ ...currentUser, busket }));
            }
        }
        isMounted.current = true;
    }, [items]);

    function filterParts(data) {
        const filteredParts =
            searchedValue && selectedCategory === ""
                ? data.filter(
                      (part) =>
                          part.name
                              .toLowerCase()
                              .indexOf(searchedValue.toLowerCase()) !== -1
                  )
                : selectedCategory
                ? data.filter((part) => part.category === selectedCategory)
                : data;
        return filteredParts;
    }
    const filteredParts = filterParts(parts);
    const sortByInc = () => {
        dispatch(partsSortedByInc());
    };
    const sortByDec = () => {
        dispatch(partsSortedByDec());
    };

    return (
        <section className="parts">
            <Breadcrumbs />
            <Container>
                <div className="parts-head">
                    <h1 className="head-title">Магазин</h1>
                    <p className="parts-head__stock">
                        В наличии {filteredParts.length}
                        {filteredParts.length > 1 && filteredParts.length < 5
                            ? " товара"
                            : " товаров"}
                    </p>
                    <Search
                        searchedValue={searchedValue}
                        setSearchedValue={setSearchedValue}
                        handleSearchedValue={handleSearchedValue}
                    />
                    <Sort sortByInc={sortByInc} sortByDec={sortByDec} />
                    <CategoriesList
                        items={categories}
                        onItemSelect={handleCategorySelect}
                    />
                </div>
                <div className="parts-grid">
                    {filteredParts.map((part) => (
                        <PartCard key={part._id} {...part} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default PartsListPage;
