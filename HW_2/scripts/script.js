// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.
// let weight = "88.3";
// let height = "1.75";

// const bmi = Number(weight) / Math.pow(Number(height), 2);
// console.log(bmi.toFixed(1)); // 28.8

//-----------------------------------

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. Значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевірте, що буде в консолі при значеннях 27.3 і 27.9.

// console.log(Math.floor(27.3));
// console.log(Math.ceil(27.3));
// console.log(Math.round(27.3));

// console.log(Math.floor(27.9));
// console.log(Math.ceil(27.9));
// console.log(Math.round(27.9));

// -----------------------------------
// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

function totalMinutes(mins) {
  let hours = Math.floor(mins / 60);
  let minutes = mins % 60;
  //   return hours + ":" + minutes;
  return `${addPadStart(hours)}:${addPadStart(minutes)}`;
}
function addPadStart(num) {
  return num.toString().padStart(2, "0");
}
console.log(totalMinutes(70));
console.log(totalMinutes(450));
console.log(totalMinutes(1441));

//-----------------------------------

/*
 * Вивести на екран модальне вікно prompt з повідомленням "Enter the number".
 * Результат виконання модального вікна записати в змінну, значення якої вивести в консоль.
 * */
// let result = prompt("Enter the number");
// console.log(result);
//-----------------------------------

/*
 * За допомогою модального вікна prompt отримати від користувача два числа.
 * Вивести в консоль суму, різницю, добуток, поділ та залишок від поділу їх один на одного.
 * */

// let a = prompt();
// let b = prompt();
// let c = Number(a) + Number(b);
// console.log(c);

// let a = Number(prompt());
// let b = Number(prompt());
// let c = a - b;
// console.log(c);

// let a = Number(prompt());
// let b = Number(prompt());
// let c = a * b;
// console.log("*", c);

// let a = prompt();
// let b = prompt();
// let c = Number(a) / Number(b);
// console.log(c);

// let a = prompt();
// let b = prompt();
// let c = Number(a) % Number(b);
// console.log("%", c);
