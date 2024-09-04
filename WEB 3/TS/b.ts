export function add(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}

add(1, 2)

export default class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
}


const calc = new Calculator();
console.log(calc.add(10, 5));