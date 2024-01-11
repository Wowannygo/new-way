let titleProject = prompt('Название проекта?');
let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
function showTypeOf(screensValue) {
  console.log(typeof screensValue);
}

showTypeOf(screensValue);


function getTitle() {
  return titleProject.charAt(0).toUpperCase() +
    titleProject.slice(1).toLowerCase();
}
console.log('Название проекта', getTitle());


let responsive = confirm('Нужен ли респонсивный сайт?')


let screenPrice = 1000
let service1 = prompt('Какой сервис нужен?')
let servicePrice1 = prompt('Сколько это будет стоить?')
let service2 = prompt('Какой еще сервис тебе нужен?')
let servicePrice2 = prompt('Сколько будет стоить этот второй сервис?')



const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};
const allServicePrices = getAllServicePrices()
console.log('Все сервисы', allServicePrices);

function getFullPrice() {
  return allServicePrices + screenPrice;
}
let fullPrice = getFullPrice();

let discountPercent = 10
function getServicePercentPrices() {
  return fullPrice - (fullPrice * discountPercent / 100)
}
let servicePercentPrice = getServicePercentPrices()
console.log('Итог', Math.round(servicePercentPrice))

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
getRollbackMessage();


