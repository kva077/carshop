import { calcTotalPrice } from "./calcTotalPrice";

export const getBusket = () => {
    const data = localStorage.getItem("busket");
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(items);
    return { items, totalPrice };
};
