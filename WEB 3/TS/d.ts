// Generics

type Input = string | number ;


function firstEl(arr: Input[]) {
    return arr[0];
}
const value = firstEl(["Jay", "Vegad"]);

console.log(value);

/* 
    in this approch ts can not decide give value is string or number so we can make one 
*/