





let titleProject = prompt('Название проекта?')
console.log(titleProject)
let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
console.log(screensValue)



let responsive = prompt('Нужен ли респонсивный сайт?');
if (responsive = 'да') {
    console.log('респонсивный');
} else {
    console.log('не респонсивный');
}


let screenPrice = 1000
let service1 = prompt('Какой сервис нужен?')
console.log(service1)
let servicePrice1 = prompt('Сколько это будет стоить?')
console.log(servicePrice1)
let service2 = prompt('Какой еще сервис тебе нужен?')
console.log(service2)
let servicePrice2 = prompt('Сколько будет стоить этот второй сервис?')
console.log(servicePrice2)
let fullPrice = screenPrice + +servicePrice1 + +servicePrice2
console.log(fullPrice)

let Percent = fullPrice * 10 / 100
console.log(Percent)
let servicePercentPrice = fullPrice - Percent
console.log('Итог', Math.round(servicePercentPrice))

if (fullPrice > 50000) {
    console.log('сделаем скидку в 10%')
} else if (20000 < fullPrice && fullPrice < 50000) {
    console.log('сделаем скидку в 5%')
} else if (0 < fullPrice && fullPrice < 20000) {
    console.log('скидок нет')
} else if (fullPrice = 0, 20000, 50000) {
    console.log('скидка')
} else if (fullPrice < 0) {
    alert('что-то пошло не так')
}