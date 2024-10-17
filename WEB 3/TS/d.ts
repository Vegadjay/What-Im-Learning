// Generics in TypeScript

// Basic approach without generics
type Input = string | number;

function firstEl(arr: Input[]) {
    return arr[0];
}

const value = firstEl(["Jay", "Vegad"]);
console.log(value);

// In this approach, TypeScript can't determine if the returned value is string or number
// Generics solve this problem by allowing us to create reusable components that work with multiple types

// Generic function
function getSomthing<T>(arr: T[]): T {
    return arr[0];
}

const firstEle1 = getSomthing<number>([1, 2, 3]);
const secondEle = getSomthing<string>(["Jay", "Vegad"]);

console.log(firstEle1);
console.log(secondEle);

// Additional information about generics:
// 1. Generics provide type safety while allowing flexibility in data types.
// 2. They help in creating reusable code components.
// 3. The <T> syntax defines a type variable that can be used throughout the function.
// 4. When calling a generic function, you can explicitly specify the type, or let TypeScript infer it.
// 5. Generics can be used with functions, interfaces, and classes.
// 6. They allow for better abstraction and reduce the need for type casting.