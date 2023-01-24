// 1. Створити функцію, яка буде видаляти людей з масиву за індексом, який ми передамо параметром.
const arr = ["Vasya", "Petya", "Alexey"];
const index = arr.indexOf("Petya");

if (index !== -1) {
  arr.splice(index, 1);
}

console.log(arr); /// ['Vasya', 'Alexey']

// 2. Створити функцію яка поверне всі ключі об'єкта, переданого параметром

// const obj = { name: "Vasya", age: 1 };
// function getAllKeys(obj) {
//   getAllKeys = Object.keys(obj);
//   console.log(getAllKeys);
// }

// getAllKeys(obj); /// ["name", "age"]

// 3. Створити функцію, яка поверне всі значення об'єкта переданого параметром

const obj = { name: "Vasya", age: 1 };
function getAllValues(obj) {
  getAllValues = Object.values(obj);
  console.log(getAllValues);
}
getAllValues(obj); /// ["Vasya", 1]

// 4. Створити функцію, де ми першим параметром передамо об'єкт з новим кандидатом, а другим параметром - id будь-якого кондидата в масиві condidateArr. Функція повинна буде вставити кандидата переданого через перший параметр до масиву перед кондидатом у якого id одно тому що передали у другому параметрі
// const obj = {
//   id: 3,
//   name: "Vasya",
// };

// const secondObj = {
//   id: 4,
//   name: "Katya",
// };

// const arr = [
//   {
//     id: 1,
//     name: "Kolya",
//   },
//   {
//     id: 2,
//     name: "Petya",
//   },
// ];

// insertIntoarr(obj, 2);
// console.log(arr);
// /// [ {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]

// insertIntoarr(secondObj, 1);
// console.log(arr);
// /// [ {id: 4,name: 'Katya'}, {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]
