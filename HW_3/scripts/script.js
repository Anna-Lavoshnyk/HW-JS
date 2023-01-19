// 1) Створити цикл на 10 ітерацій. На кожній ітерації якщо i парне, то вивести в консоль слово Fiz, якщо i не парне, то вивести в консоль слово Buz, якщо i кротну цифру 3, то вивести FizBuz.
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} Fiz`);
//   } else if (i % 2) {
//     console.log(`${i} Buz`);
//   } else if (i % 3) {
//     console.log(`${i} FizBuz`);
//   }
// }

// 2) Написати логіку знаходження факторіалу числа 10.

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }
// console.log(factorial(10));

// 3) У пачці паперу 500 аркушів. За тиждень в офісі витрачається 1200 аркушів. Яку найменшу кількість пачок потрібно купити в офіс на 8 тижнів?
// let sheets = 500;
// let usedSheets = 1200;
// let weeks = 8;

// let usedSheetsPer8Weeks = usedSheets * weeks;
// let requiredNumberOfPacks = Math.ceil(usedSheetsPer8Weeks / sheets);
// console.log(requiredNumberOfPacks);

// // 4) Створити функцію, яка виведе у консоль номер поверху та номер під'їзду за номером квартири. Поверхів у нас 9, квартир на поверсі по 3

// let floors = 9;
// let apartmentsPerFloor = 3;
// let apartment = prompt("Введите номер квартиры");

// let floor = Math.ceil(apartment / apartmentsPerFloor);
// let porch = Math.ceil(floor / floors);
// floor -= (porch - 1) * floors;
// console.log(
//   "Квартира №" +
//     apartment +
//     " находится в подъезде № " +
//     porch +
//     " на " +
//     floor +
//     " этаже"
// );

// 5) Вивести у консоль піраміду. Змінна вказує кількість рядків, з яких побудується піраміда. Піраміда повинна будуватися в однаковому візуальному вигляді між собою, але строго враховуючи кількість рядків

for (let i = 1; i < 10; i++) {
  for (let j = i; j < 10; j++) {
    console.log(" ");
  }
  for (let k = 0; k < i; k++) {
    console.log("*");
  }
  console.log("<br/>");
}
