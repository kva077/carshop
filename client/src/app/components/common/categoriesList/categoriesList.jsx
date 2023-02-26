import React from "react";
import PropTypes from "prop-types";

const CategoriesList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect
}) => {
    return (
        <div>
            <h3>Категории:</h3>
            <ul className="parts__categories">
                {items.map((item) => (
                    <li
                        key={item[valueProperty]}
                        className="parts__categories-names"
                        //     "list-group-item" +
                        //     (item === selectedItem ? " active" : "")
                        // }
                        onClick={() => onItemSelect(item)}
                        role="button"
                    >
                        {item[contentProperty]}
                    </li>
                ))}
                <li
                    className="parts__categories-disabled"
                    onClick={() => onItemSelect("")}
                    role="button"
                >
                    Очистить
                </li>
            </ul>
        </div>
    );
};
CategoriesList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
CategoriesList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};
export default CategoriesList;

//     return (
//         <div className="parts__categories">
//             <p>Категории товаров:</p>
//             {categories.map((category) => (
//                 <span
//                     onClick={() => sortByCat(category._id)}
//                     key={category._id}
//                     className="parts__categories-names"
//                 >
//                     {category.name}
//                 </span>
//             ))}
//         </div>
//     );
// };

// export default CategoriesList;
