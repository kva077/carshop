export const calcTotalPrice = (items) => {
    return items.reduce((sum, item) => item.price * item.count + sum, 0);
};
