
// ===================== ADDITIONAL ========================== //
// *== task-1 == //

// const callback = (element) => {
//   for(let arr of element) {
//     if (arr < 10)  {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return true;
// } 

// const every = function(array, callback) {
//   console.log(callback(array));; 
// }

// every([1,2,3,4,5], callback) // true (перевіряємо чи елементи < 10)
// every([2,45,67,34], callback) // false (перевіряємо чи елементи > 10)
// // Написати метод every який приймає масив і ф-ю callback (в якій ми будемо робити різні перевірки) Цей метод повертає true
// // якщо кожен елемент масиву пройшов перевірку з callback. Якщо хоча б один елемент не проходить перевірку то повертає false, 
// //callback приймає елемент масиву



//* == task-2 == //
// const callback = element => element > 10;
// const callback1 = element => element < 10;

// const some = (array, callback) => {
//   for (let el of array) {
//     if (callback(el)) {
//       return true
//     }
//   }
//   return false
// }
// console.log(some([1,2,3,23,5], callback)); // true (перевіряємо чи елементи > 10)
// console.log(some([12,45,67,34], callback1)); // false (перевіряємо чи елементи < 10)
// Написати метод some який приймає масив і ф-ю callback. Цей метод поверне true якщо хоча б один елемент масиву пройже 
// перевірку з callback callback приймає елемент масиву



//* == task-3 == //
// // const callback = item => Boolean(item)
// const compact = array => array.filter(Boolean);
// console.log(compact([1, 0, '', null, 'Hello'])); // [1,'Hello']

// Створити метод compact який приймає масив і вертає новий де відсутні будь-які значення що при переведені в bool дають false


// *== task-4 == //
// const ordersA = [
//   { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
//   { name: 'Computer', price: 230000, deliveryProgress: 100, type: 1 },
//   { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
// ]

// const ordersB = [
//   { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
//   { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
// ]
// const showDeliveryStatus = array => {
//   for (let el of array) {
//     if (el.deliveryProgress === null) {
//       console.log("Ready for delivery");
//     } else if (el.deliveryProgress < 100) {
//       console.log("In progress");
//     } else if (el.deliveryProgress === 100) {
//       console.log("Done");
//     }
//   }

// }

// showDeliveryStatus(ordersA) // "In Progress", "Done", "Ready for delivery"
// showDeliveryStatus(ordersB) // "In progress", "Not Ordered", "Ready for delivery"

// Написати ф-ю showDeliveryStatus яка приймає масив і виводить на екран інформацію про доставку товара всіх типів.
// Якщо прогрес доставки 100 показувати строку "Done"
// Якщо прогрес доставки < 100 показувати строку "In progress"
// Якщо прогрес доставки null показувати строку "Ready for delivery"





