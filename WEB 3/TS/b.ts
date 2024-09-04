export function add(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}
import { add } from "./math"

add(1, 2)

export default class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
}

import Calculator from './Calculator';

const calc = new Calculator();
console.log(calc.add(10, 5));