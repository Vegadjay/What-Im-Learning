// * In this file we are studying this concepts
// ! Callbacks
// ! Async
// ! Promises
// ! JS fun
// ! Assignment

const { rejects } = require("assert");
const { count } = require("console");
const { promises } = require("dns");
const { waitForDebugger } = require("inspector");
const { resolve } = require("path");

// This is the callback fun demo and

// function square(n) {
//   return n * n;
// }

// function cude(n) {
//   return n * n * n;
// }

// function quard(n) {
//   return n * n * n * n;
// }

// sum = (a, b, fn) => {
//   return fn(a) + fn(b);
// };

// let ans = sum(1, 2, quard);
// console.log(ans);

// ! ---------------------------------------

// ! Async Functions:

// sum = (a, b) => {
//   console.log(a + b);
// };

// Best Example of Async Fun is setTimeout

// printTimeout = () => {
//   console.log("Time Out is Called");
// };
// console.log("SetTimeOut is not called");
// setTimeout(printTimeout, 3000);
// console.log("SetTime Out Is Finished");

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// * Second Demo Of Async fn

// function myAsync(fn, duration) {
//   setTimeout(fn, duration);
// }

// myAsync(function printSomething() {
//   console.log("Here Is the My Own fn");
// }, 2000);

// * Callback Hell In js
/*
    -> While we put function into function and call it after time to time than it is call as callback hell

    ex..

    setTimeout(printInConsole = () => {
        console.log("First Call");
        setTimeout(print2 = () => {
            console.log("Second Call");
        },2000)    
    },3000);
*/

// ! Promises in the js

/*
    -> Promise is the very lengthy code but used in many places..  
    -> Now Impliment the code as promise Function  
    -> Promise is the another class of the js... 
    -> Making Async function as two ways.
    -> one is making function without promise and making function using promise
    -> promis does not take callback as parameters and simple async is take callback as parameter
    -> This function take callback as .then and wait for resolve it and then print it.
    -> In this fn we can must return promise otherwise print undefined as the output
    !-> This is calles async await syntax, Promise chaining and both is called => callback hell
*/
// Syntax for making promise

// function promiseFn(duration) {
//   const p = new Promise(function(resolve){
//     setTimeout(()=>{
//       resolve();
//     },duration)
//   });
// return p;
// }

// const ans = promiseFn(5000);
// ans.then(function(){
// console.log("hello");
// })
// ! Also in this case we need to print promise otherwise promise is not showing very well..

// console.log(ans);

// One ex of promise

// const printfn = (duration) => {
//   const p = new Promise(function (resolve) {
//     setTimeout(() => {
//       resolve();
//     }, duration);
//   });
//   return p;
// };

// const ans = printfn(3000);
// ans.then(() => {
//   console.log("Promise resolved...");
// });
// console.log(ans);

// function countSum(duration) {
//   const p = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, duration * 1000);
//   });
//   return p;
// }

// const ans = countSum(2);
// ans.then(() => {
//   function printSum(a, b) {
//     console.log("Promise Resolved...");
//     console.log(a + b);
//   }
//   printSum(3, 4);
// });

// console.log(ans);


