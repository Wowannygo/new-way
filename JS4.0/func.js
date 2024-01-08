const getAllServicePrices = function (servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2;
};
const allServicePrices = getAllServicePrices()


function getFullPrice() {
    const result = screenPrice + allServicePrices;
    return result;
}
const fullPrice = getFullPrice();
console.log(fullPrice)

function getTitle() {
    return titleProject.charAt(0).toUpperCase() +
        titleProject.slice(1)
}
getTitle();
console.log(getTitle(dada));