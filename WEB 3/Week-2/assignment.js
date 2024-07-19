//! 1 st making counter using Interval
// console.log("js is started");

const { setFlagsFromString } = require("v8");

// a = 0;
// setInterval(function printCount() {
//     a = a + 1;
//     console.log(a);
// },1000);

//! 2nd making counter using timeOut
// a = 0;
// function printCount() {
//   a++;
//   console.log(a);
//   setTimeout(printCount, 1000);
// }
// printCount();

// ! 3rd Making File and Read it.

// const fs = require("fs");
// const content = "This is the inner File Content";
// fs.writeFile("Try.txt", content, (err) => {
//   if (err) {
//     console.log("Error is Occur");
//   } else {
//     console.log("File is Created");
//   }
// });

// fs.readFile("try.txt", "utf-8", (err, data) => {
//   console.log("this is the data of the file: " + data);
//   console.log("this is the error of the file: " + err);
// });

// fs.appendFile("Week-2Try.txt", "Add content here", (err) => {
//   console.log(err);
// });

// ! File system using js

// const fs = require("fs");

// const content = "This is the text and this is write in the file";
// fs.writeFile("try.txt", content, (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// });
// fs.readFile("Try.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("Error is Occur");
//   } else {
//     console.log("Here is the data:  ", data);
//   }
// });

// ! Medium Problems

// ! 1St Making Clock

// printTime = () => {
//   setInterval(() => {
//     let d = new Date();
//     second = d.getSeconds();
//     minute = d.getMinutes();
//     hour = d.getHours();
//     console.log(hour, ":", minute, ":", second);
//   }, 1000);
// };
// printTime();

// ! 2nd Clean the file

/*
    Read The file and remove the extra spaces from the Line
*/

// fs.readFile("try.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("Error is Occur: ", error);
//   } else {
//     console.log("Here is the orignal data file", data);
//     let replacedStr = data.replace(/\s+/g, " ");
//     console.log("Here is the Modified File: ", replacedStr);
//   }
// });

/* ! 3rd 
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function printfn(n) {
//   const p = new Promise(function (resolve) {
//     setTimeout(() => {
//       resolve();
//     }, n * 1000);
//   });
//   // ! Important return here promise otherwise this is return error
//   return p;
// }
// const ans = printfn(2);
// ans.then(function print() {
//   console.log("Innner Contant is ptinted");
// });
// console.log(ans);

function printConsole(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

const ans = printConsole(2000);
ans.then(() => {
  console.log("This is the file and print in iside the funtion");
});
console.log(ans);
