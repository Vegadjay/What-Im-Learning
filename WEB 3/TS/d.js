// Generics
function firstEl(arr) {
    return arr[0];
}
var value = firstEl(["Jay", "Vegad"]);
console.log(value);
/*
    in this approch ts can not decide give value is string or number so we can make one generic that
    helps to find that is string or number
*/
function getSomthing(arr) {
    return arr[0];
}
var firstEle1 = getSomthing([1, 2, 3]);
var secondEle = getSomthing(["Jay", "Vegad"]);
console.log(firstEle1);
console.log(secondEle);
