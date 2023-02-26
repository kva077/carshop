import React from "react";
import SvgIcon from "../svgIcon";

const Search = ({ handleSearchedValue, searchedValue, setSearchedValue }) => {
    return (
        <div className="search">
            <div className="search-bar">
                <input
                    type="text"
                    name="searchedValue"
                    placeholder="Поиск..."
                    className="search-input"
                    value={searchedValue}
                    onChange={handleSearchedValue}
                />
                {searchedValue && (
                    <SvgIcon
                        classes="clear-icon"
                        name="x"
                        onClick={() => setSearchedValue("")}
                    />
                )}
            </div>
        </div>
    );
};

export default Search;
