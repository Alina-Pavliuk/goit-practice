// *== task-1 == //
// const capitalize = str => {
//   const words = str.split(' ');
//   const arr = []; 
//   for(let word of words) {
//     arr.push(word[0].toUpperCase() + word.slice(1))
//   }
//   return arr.join(' ')
// }

// const capitalize = str => {
//   return str.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
// }

// console.log(capitalize('the quick brown fox'));  // 'The Quick Brown Fox '
// // Написати ф-ю capitalize яка буде приймати строку і буде вертати нову строку де кожне слово буде починатися з великої літери.


// *== task-2 == //
// const countVowels = str => {
//   const arr = [];
//   str.split('').filter(item => {
//     item = item.toLowerCase();
//     if(item === 'a' || item === 'i' || item === 'o' || item === 'e' || item === 'u') {
//       arr.push(item);
//     }
//   });
//   return arr.length;
// }
// console.log(countVowels('the quick brown fox')); // 5
// // Написати ф-ю countVowels яка буде приймати строку і буде вертати 
// // кількість голосних літер. aeiouAEIOU - рядок з голосними в англ 
// // алфавіті


// *== task-3 == //
// const convertRemToPx = (rem, baseFontSize) => {
//   const valueRem = Number.parseInt(rem);
//   const valueBase = Number.parseInt(baseFontSize);
//   return valueRem * valueBase;
// }

// console.log(convertRemToPx('2rem', '20px'));
// console.log(convertRemToPx('4rem', '230px'));

// Написати ф-ю яка приймає 2 параметра (розміри в ремах - "2rem) і 
// велечину базового шрифта ("20px") і вертає конвертований розмір в пікселях

// *== task-4 == //
// const takesUnit = value => `${value * 9 / 5 + 32} F`;

// console.log(takesUnit(44));
// console.log(takesUnit(134))
// console.log(takesUnit(567)) 
// // Написати ф-ю що приймає число (температура в цельсіях) і виводить 
// //результат в фаренгейтах

// *== task-5 == //
// const calculateDogAge = age => `"Person's age = ${age * 7}"`

// console.log(calculateDogAge(4));
// console.log(calculateDogAge(7));
// console.log(calculateDogAge(12));
// // Написати ф-ю calculateDogAge яка приймає один параметр - вік собачки. 
// //Результатом її роботи буде вік перевединий на людський (1 рік собаки це
// // 7 років в людини)

// *== task-6 == //
// const rgbToHex = (r, g, b ) => {
//   const changeHex = value => {
//     const hex = value.toString(16);
//     return hex.length === 1 ? '0' + hex : hex;
//   } 
//   return '#' + changeHex(r) + changeHex(g) + changeHex(b)
// }
// console.log(rgbToHex(255, 45, 200));
// console.log(rgbToHex(0, 255, 0));
// console.log(rgbToHex(255, 255, 255));

// Написати ф-ю rgbToHex яка приймає колір в форматі rgb і повертає колір
// в форматі hex

// *== task-7 == //
// const nonUniqueElements = (arr) => {
//   const res = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     for( let j = 0; j < arr.length; j += 1) {
//       if (arr[i] === arr[j] && i !== j) {
//         res.push(arr[i])
//         break;
//       }
//     }
//   }
//   return res;
// }

// // Написати ф-ю яка приймає масив і видаляє звідти всі унікальні 
// //елементи
// console.log(nonUniqueElements([1, 2, 3, 1, 3])) // [1, 3, 1, 3]
// console.log(nonUniqueElements([1, 2, 3, 4, 5])) // []
// console.log(nonUniqueElements([5, 5, 5, 5, 5])) // [5, 5, 5, 5, 5]
// console.log(nonUniqueElements([10, 9, 10, 10, 9, 8])) // [10, 9, 10, 10, 9]

// *== task-8 == //
// const median = arr => {
//   return arr.length % 2 === 0 
//   ? ((arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2) 
//   : arr[Math.floor(arr.length / 2)];
  
// }
// // Написати ф-ю median яка приймає масив і знаходить його медіану Медіана – це числове значення, 
// //яке ділить відсортований масив чисел на більшу і меншу половини. У відсортованому масиві 
// //з непарним числом елементів медіана – це число в середині масиву. Для масиву з парним числом елементів, 
// //де нема ні одного елемента точно посередині, медіана – це середнє значення двох чисел, які знаходяться 
// //в середині масиву. В цій задачі заданий непустий масив натуральних чисел. Вам потрібно знайти медіану даного масиву.
// // console.log(median([1, 2, 3, 4, 5])) // 3
// // console.log(median([3, 6, 10, 15, 20, 99])) // 12.5


