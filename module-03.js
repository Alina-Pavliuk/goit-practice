
// ===================== ADDITIONAL ========================== //
// *== task-1 == //
// const orderA = { apple: 5, cheese: 1, bread: 3 }; 
// const orderB = { orange: 10, pork: 2, bread: 1 };

// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 }

// const getOrderPrice = function(myOrder, price) {
//   let orderPrice = 0;
//   for (let el in myOrder) {
//    orderPrice += myOrder[el] * price[el];
//   }
//   return orderPrice;
// }
// console.log(getOrderPrice(orderA, productsPrice));
// console.log(getOrderPrice(orderB, productsPrice));

// Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і обєкт з цінами товару) Ця ф-я має повернути ціну 
//замовлення

// *== task-2 == //
// const isObjectEmpty = obj => Object.keys(obj).length === 0; 

// console.log(isObjectEmpty({})); // true
// console.log(isObjectEmpty({name: 'user', age: 21})); //false
// Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. Якщо обєкт пустий то повернути true інакше false


// *== task-3 == //
// const SIZES = {
//   BIG: { price: 25, cal: 100, time: 15 },
//   SMALL: { price : 15, cal: 50, time: 7 },
//   MEDIUM: { price : 15, cal: 50, time: 7 }
// }
// const STUFFING = {
//   CHEESE: { price : 6.5, cal: 45, time: 2 },
//   BEACON: { price : 10, cal: 70, time: 6 },
//   TOMATO: { price : 12.1, cal: 4, time: 5 },
//   CHICKEN: { price : 9.3, cal: 30, time: 5.1 }
// }
// const SAUCES = {
//   MUSTARD: { price : 3, cal: 5, time: 1 },
//   KETCHUP: { price : 4.2, cal: 20, time: 1.5 },
//   BOLOGNESE: { price : 7.5, cal: 50, time: 3 }
// }

// const pizza = {
//   size: {},
//   stuffing: [],
//   sauces: [],

//   addStuffing(stuffing){
//     if (this.stuffing.includes(stuffing)){
//       console.log('Такая добавка уже есть');
//     } else {
//       this.stuffing.push(stuffing);
//     }
//   },
  
//   addSauces(sauces){
//     if (this.sauces.includes(sauces)){
//       console.log('Такой соус уже есть');
//     } else {
//       this.sauces.push(sauces);
//     }
//   },

//   removeStuffing(stuffing){
//     if (!this.stuffing.includes(stuffing)) {
//       console.log('Такой добавки нет');
//     } else {
//       this.stuffing = this.stuffing.filter(item => item !== stuffing);
//     }
//   },
  
//   removeSauces(sauces){
//     if (!this.sauces.includes(sauces)) {
//       console.log('Такого соуса нет');
//     } else {
//       this.sauces = this.sauces.filter(item => item !== sauces);
//     }
//   },
//   chooseSize(size){
//     this.size = size;
//   },

//   getPizzaPrice(){
//     let sum = 0;
//     sum += this.size.price;
//     for (let el of this.stuffing) {
//       sum += el.price;
//     }
//     for(let el of this.sauces){
//       sum += el.price;
//     }
//     return +sum.toFixed(2);
//   },
//   getCalories(){
//     let sumCalories = 0;
//     sumCalories += this.size.cal;
//     for (let el of this.stuffing) {
//       sumCalories += el.cal;
//     }
//     for(let el of this.sauces){
//       sumCalories += el.cal;
//     }
//     return sumCalories;
//   },
//   showOrder(){
//     if (this.isValidPizza()) {
//       console.log(`Order: price: ${this.getPizzaPrice()}, calories: ${this.getCalories()}, stuffing: ${JSON.stringify(this.stuffing)}, sauces: ${JSON.stringify(this.sauces)}`);
//     } else {
//       console.log('Order is not correct');
//     }
//   },
//   showTime(){
//     let time = 0;
//     time += this.size.time;
//     for (let el of this.stuffing) {
//       time += el.time;
//     }
//     for(let el of this.sauces){
//       time += el.time;
//     }
//     return time;
//   },
//   isValidPizza(){
//     let message = '';

//     if (Object.keys(this.size).length === 0) {
//       message = 'No pizza size selected';
//     };
//     if (this.stuffing.length === 0) {
//       message = 'Choose the stuffing';
//     };
//     if (this.sauces.length === 0) {
//       message = 'Choose the sauces'
//     }
//     return !Boolean(message);
//   },
// }

// pizza.addStuffing(STUFFING.TOMATO);
// // pizza.addStuffing(STUFFING.CHEESE);
// pizza.addStuffing(STUFFING.CHEESE);
// pizza.addSauces(SAUCES.KETCHUP);
// // pizza.addSauces(SAUCES.KETCHUP);
// pizza.addSauces(SAUCES.BOLOGNESE);

// pizza.removeStuffing(STUFFING.TOMATO)
// pizza.removeSauces(SAUCES.KETCHUP)

// pizza.chooseSize(SIZES.BIG)
// console.log(pizza.getPizzaPrice());
// console.log(pizza.getCalories());
// console.log(pizza.showTime());
// console.log(pizza.isValidPizza());
// pizza.showOrder();
// console.log(pizza.sauces);
// console.log(pizza.stuffing);

// Створити обєкт піци з полями і методами

// В обєкті має бути такі поля і методи:
// поле для збереження розміру піци
// поле для збереження списку добавок
// поле для збереження списку соусів
// метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
// метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
// метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити добавку, а там ще жодного немає)
// метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
// метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
// метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
// метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
// метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
// метод що показує час приготуванни в хвилинах в залежності від складності піци
// Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)

// Створити всі методи і перевірити чи вони працюють

