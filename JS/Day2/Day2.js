// Array
// 1, Collection of elements
// 2, lits of different data type
// 3, Array can container more than one elements
// 4, Array can always enclosed with square bracket [ ]

//Accessing the elements in array
// index is always start from 0 end with n - 1 => n => length of the array
// length is always start from 1

// var arr = [10, 20, 30, "hello", true, null, "asdja;l"];
// console.log(arr[4]);
// console.log(arr.length);

// Adding
// var arr = [10, 20, 30, "hello", true, null];
// arr[6] = "last index";
// push , unshift
// push => add element at the end
// unshift => add element at the beginning

// arr.push("100");
// console.log(arr);

// arr.unshift("0");
// console.log(arr);

// Modifyig the array elements
// var arr = [10, 20, 30, "hello", true, null];
// arr[0] = 100;
// console.log(arr);

// Removing the array elements
// var arr = [10, 20, 30, "hello", true, null];

// pop , shift
// pop => remove the element at the end
// shift => remove the element at the beginning
// arr.pop();
// arr.shift();
// console.log(arr);

// objects
// 1, objects is collection of properties
// 2, each properties have key (unique) & value (duplicate)
// 3, lits of different data type
// 4, it contain more than one elements
// 5, it always enclosed with { }

// var obj = {
//   name: "Yogi",
//   class: "MERN",
//   batch: 21,
//   isLearning: true,
//   classmates: ["Vilma", "mamuthi"],
//   things: { mobile: "Iphone", laptop: "Mac" },
// };
// Accessing the objects properties
// Two ways
// dot notation ( . )  ,  bracket notaiton  ( [] )

// Dot notation .
// console.log(obj.name);
// console.log(obj.classmates[0]);

// bracket notation [""]
// console.log(obj["class"]);
// console.log(obj.things["mobile"]);

// Adding
// var obj = {
//   name: "Yogi",
//   class: "MERN",
//   batch: 21,
//   isLearning: true,
//   classmates: ["Vilma", "mamuthi"],
//   things: { mobile: "Iphone", laptop: "Mac" },
// };
// obj.qualification = ["CSE"];
// obj["qualification"] = ["CSE"];
// console.log(obj);

// Modification
// var obj = {
//   name: "Yogi",
//   class: "MERN",
//   batch: 21,
//   isLearning: true,
//   classmates: ["Vilma", "mamuthi"],
//   things: { mobile: "Iphone", laptop: "Mac" },
// };

// obj.isLearning = false;
// console.log(obj);

// Remove
// var obj = {
//   name: "Yogi",
//   class: "MERN",
//   batch: 21,
//   isLearning: true,
//   classmates: ["Vilma", "mamuthi"],
//   things: { mobile: "Iphone", laptop: "Mac" },
// };

// delete obj.name;
// console.log(obj);

// arrow function => nameless function  () => { }

// var arrow = (str) => {
//   console.log(str);
// };

// arrow("Arrow function"); // aruguments
// arrow("Arrow function1"); // aruguments
// arrow("Arrow function2"); // aruguments
// arrow("Arrow function3"); // aruguments
