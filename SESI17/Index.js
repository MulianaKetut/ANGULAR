// //string
// var greeting = "Selamat datang";
// let name = "Angular";

// {
//   let message = "perbedaan let dan var";
//   var message1 = "perbedaan let dan var";
// }

// //boolean
// let isPresent = false;

// //number
// const pi = 3.14;

// //undefined
// let address;
// let phoneNumber = undefined;

// console.log(greeting + name + pi);
// console.log(greeting, name, pi);
// console.log(message1);
// console.log(pi);
// console.log(address, phoneNumber);

// // typeof => buat cek tipe data
// console.log(typeof greeting);
// console.log(typeof isPresent);
// console.log(typeof pi);
// console.log(typeof phoneNumber);

// //operasi matematika
// console.log("5" + pi);
// console.log("5" - pi);
// console.log("5" * pi);
// console.log("5" - pi);

// //operasi kondisional
// console.log("5" == 5);
// console.log("5" === 5);

// //input data
// // console.log(process.argv);

// console.log(typeof null);
// console.log(typeof undefined);

// let v = null;
// console.log(v);

// //loop
// const itr = 10;
// let counter = 0;
// // while (counter < itr) {
// //   console.log(counter);

// //   counter++;
// // }

// for (let index = 0; index < itr; index++) {
//   console.log(index);
// }

// //array
// const students = ["nama1", "nama2", "nama3"];
// const anArray = ["nama1", 22, true];

// console.log(students);
// console.log(anArray);
// console.log(anArray[0]);

// //push => menambah di belakang
// students.push("nama4", "nama5");
// console.log(students);

// //pop => delete di belakang
// students.pop();
// console.log(students);

const numbers = [1, 42, 3, 11, 21, 75];
//splice
// const setOfNumbers = numbers.splice(2);

//sort number
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
// console.log(setOfNumbers);
