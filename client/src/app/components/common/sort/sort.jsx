import React, { useState } from "react";
import SvgIcon from "../svgIcon";

const Sort = ({ sortByInc, sortByDec }) => {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(0);
    const list = ["Возрастание цены", "Убывание цены"];
    if (selected === 0) {
        sortByInc();
    } else {
        sortByDec();
    }
    return (
        <div className="sort">
            <div className="sort__title">
                <SvgIcon name={!selected ? "up" : "down"} />
                <p>Сортировка: </p>
                <span onClick={() => setVisible(!visible)}>
                    {!selected ? list[0].toLowerCase() : list[1].toLowerCase()}
                </span>
            </div>
            {visible && (
                <div className="sort__menu">
                    <ul>
                        {list.map((name, index) => {
                            return (
                                <li
                                    key={index}
                                    className={
                                        "sort__menu-li" +
                                        (selected === index ? "--selected" : "")
                                    }
                                    onClick={() => setSelected(index)}
                                >
                                    {name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sort;
