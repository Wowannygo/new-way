let titleProject = prompt('Название проекта?');
let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
let responsive = confirm('Нужен ли респонсивный сайт?')
let servicePrice1
let servicePrice2;

let screenPrice = 1000;

screenPrice = Number(screenPrice);


function showTypeOf(screensValue) {
    console.log(typeof screensValue);
}

function getTitle() {
    return titleProject.charAt(0).toUpperCase() +
        titleProject.slice(1).toLowerCase();
}

const getAllServicePrices = function () {
    let additionalServices = ['Какая доп услуга нужна?', 'Какая ещё доп услуга нужна?',];
    let priceService;
    let sum = 0;
    for (let i = 0; i < additionalServices.length; i++) {
        prompt(additionalServices[i]);
        do {
            priceService = +prompt("Сколько это стоит?");

        } while (isNaN(priceService))

        sum += priceService;
    }

    return sum;

}
const allServicePrices = getAllServicePrices()

function getFullPrice() {
    return allServicePrices + screenPrice;
}
let fullPrice = getFullPrice();

let discountPercent = 10
function getServicePercentPrices() {
    return fullPrice - (fullPrice * discountPercent / 100)
}
let servicePercentPrice = getServicePercentPrices()

function getRollbackMessage() {
    if (fullPrice > 50000) {
        console.log('сделаем скидку в 10%')
    } else if (20000 < fullPrice && fullPrice < 50000) {
        console.log('сделаем скидку в 5%')
    } else if (0 < fullPrice && fullPrice < 20000) {
        console.log('скидок нет')
    } else if (fullPrice === 0, 20000, 50000) {
        console.log('скидка')
    } else if (fullPrice < 0) {
        alert('что-то пошло не так')
    }
}



console.log('Название проекта', getTitle());
console.log('Все сервисы', allServicePrices);
console.log('Итог', Math.round(servicePercentPrice))

showTypeOf(screensValue);
getFullPrice();
getRollbackMessage();