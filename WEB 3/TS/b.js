"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = exports.add = void 0;
function add(x, y) {
    return x + y;
}
exports.add = add;
function subtract(x, y) {
    return x - y;
}
exports.subtract = subtract;
add(1, 2);
class Calculator {
    add(x, y) {
        return x + y;
    }
}
exports.default = Calculator;
const calc = new Calculator();
console.log(calc.add(10, 5));
