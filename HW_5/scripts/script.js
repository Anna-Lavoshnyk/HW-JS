// 1. Напишіть функцію avg, яка повертає середнє значення переданого масиву (якщо довжина масиву дорівнює нулю, то має повернутися 0).

function avg(arr) {
  return arr.length === 0 ? 0 : arr.reduce((a, b) => a + b) / arr.length;
}

console.log(avg([0, 1, 2, 3, 4, 5])); // 2.5
console.log(avg([22, 34, 62, 99])); // 54.25
console.log(avg([])); // 0
console.log(avg([1000, 2056, 3444, 1237])); // 1934.25

//------------------------

// 2. Напишіть функцію power для обчислення степені числа

function power(a, b) {
  let degree = a;
  for (let i = 1; i < b; i += 1) {
    degree *= a;
  }
  return degree;
}

console.log(power(2, 3)); // 8
console.log(power(4, 2)); // 16
console.log(power(3, 4)); // 81
console.log(power(10, 3)); // 1000

//------------------------

// 3. Напишіть функцію squareDigits, яка приймає число та зводить у квадрат кожен символ.
function squareDigits(num) {
  {
    return Number(
      ("" + num)
        .split("")
        .map(function (val) {
          return val * val;
        })
        .join("")
    );
  }
}
const squareDigits2 = squareDigits;

console.log(squareDigits(91)); // 811
console.log(squareDigits(0)); // 0
console.log(squareDigits(867)); // 643649
console.log(squareDigits2(91)); // 811
console.log(squareDigits2(0)); // 0
console.log(squareDigits2(867)); // 643649

//------------------------

// 4. Напишіть функцію isPalindrome, яка перевіряє, чи переданий рядок є паліндромом.
// Паліндром - це слово, фраза чи послідовність, які читаються так само як уперед, назад, наприклад, level.

function isPalindrome(a) {
  return a === a.split("").reverse().join("");
}

console.log(isPalindrome("level")); // true
console.log(isPalindrome("topot")); // true
console.log(isPalindrome("вимив")); // true
console.log(isPalindrome("анна")); // true
console.log(isPalindrome("алла")); // true
console.log(isPalindrome("дід")); // true
console.log(isPalindrome("ротатор")); // true
console.log(isPalindrome("радар")); // true
console.log(isPalindrome("привіт")); // false
console.log(isPalindrome("що")); // false
console.log(isPalindrome("that")); // false

//------------------------

// 5. Написати функцію stringTransformer, яка буде трансформувати рядок за такими правилами:

// 1) Змінити регістр кожного знака, тобто. нижній регістр у верхній регістр, верхній регістр у нижній регістр. (наприклад 'FizzBuzz'-> 'fIZZbUZZ');
// 2) Змінити порядок слів на зворотний (наприклад, 'pen pineapple apple PEN' --> 'pen APPLE PINEAPPLE PEN'). // Done

function stringTransformer(str) {
  let a = str
    .split("")
    .map((letter) =>
      letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase()
    )
    .join("");

  let b = str.split(" ").reverse().join(" ");
  console.log(b);
  return { a, b };
}

console.log(stringTransformer("torininGEN THE bEst"));
// BeST the TORININgen

console.log(stringTransformer("JavaScript IS cool LANGUAGE"));
// language COOL is jAVAsCRIPT

//------------------------

// 6. Реалізувати функцію, яка виконуватиме математичні операції з введеними користувачем числами

// Технічні вимоги:

// Взяти за допомогою модального вікна браузера два числа. ( функцією )
// Взяти за допомогою модального вікна браузера математичну операцію, яку потрібно здійснити. Сюди можна ввести +, -, *, /. ( функцією )
// Створити функцію, в якій провести запит чисел, мат. операції та виконати обчислення )
// Вивести у консоль результат виконання функції.

function input() {
  const firstNumber = prompt("Введите первое число");
  const secondNumber = prompt("Введите второе число");
  const operator = prompt("Введите оператор");

  function calc() {
    let result;
    if (operator === "+") {
      result = Number(firstNumber) + Number(secondNumber);
    }
    if (operator === "-") {
      result = Number(firstNumber) - Number(secondNumber);
    }
    if (operator === "*") {
      result = Number(firstNumber) * Number(secondNumber);
    }
    if (operator === "/") {
      result = Number(firstNumber) / Number(secondNumber);
    }
    return result;
  }
}
