export const getTextByNum = (num, textArray) => {
    num = Math.abs(num) % 100;
    const num1 = num % 10;
    if (num > 10 && num < 20) {
        return textArray[2];
    }
    if (num1 > 1 && num1 < 5) {
        return textArray[1];
    }
    if (num1 === 1) {
        return textArray[0];
    }
    return textArray[2];
};
