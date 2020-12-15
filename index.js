const calculateBill = (price, vat, tip) => {
    if (typeof(price, vat, tip) === "number") {
        const amount = price + (price * vat / 100) + tip;
        return "£" + amount;
    }else{
        return "error";
    }
}
module.exports = calculateBill;