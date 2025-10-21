// Spread in Array
// upack the group of elements into individual elements.( ... )

// const arr = [10, 20, 30, 40, 50];
// console.log(...arr);

// copy
// const arr1 = [10, 20, 30, 40, 50];
// const arr2 = [0, ...arr1];
// console.log(arr2);

// concatenation
// const arr1 = [10, 20, 30, 40, 50];
// const arr2 = [0];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// Spread in object
// const mark = {
//   tamil: 80,
//   english: 80,
// };

// // Copy
// const total = {
//   total: 160,
// };

// const value = {
//   ...mark,
//   ...total,
// };

// console.log(value);

// Rest => it packs the element into the single element. ( ... )
// => A rest parameter must be last in a parameter list.
// => Function parameter and destructuring.
// => Retrun array of elements.

// function add(a, b, ...d) {
//   console.log(a, b, ...d);
// }

// add(10, 20, 30, 40, 50);

// String methods
// let str = "Hello world";
// let str2 = str.trimEnd();
// console.log(str);
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.split(" ")); // => return array
// console.log("Mr ".concat(str));
// console.log(str.lastIndexOf("l"));
// console.log(str.replace("world", "Developer"));

// Destructuring
// object and array

// Array Destructuring
// let arr = [1, 2, 3, 4, 5, 6];
// let a = arr[0];
// let b = arr[1];
// console.log(a + b);

// let [a, b, c, ...d] = arr;
// console.log(a, b, c, d[2]);

// Object Destructuring

// const user = {
//   name: "peter parker",
//   email: "perterparker@gamil.com",
//   password: "PerterParker#123",
//   age: "21",
//   gender: "Male",
//   address: "22/1 lorem street",
// };

// let { email, password } = user;

// console.log(email);
// console.log(password);

// Array method
// map , filter , reducer

// Map method
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var mmm = arr.map((e) => {
//   return e;
// });
// console.log(mmm);

// filter method
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var filterdata = arr.filter((e) => e % 2 != 0);
// console.log(filterdata);

// Reduce
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var reducedata = arr.reduce((accumaltor, currentvalue) => {
//   console.log(accumaltor, currentvalue);
//   return accumaltor + currentvalue;
// });

// console.log(reducedata);
