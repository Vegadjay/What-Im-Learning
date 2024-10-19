// Type Aliases
// Type aliases create a new name for a type
type Point = {
  x: number;
  y: number;
};

// Using the type alias
const origin: Point = { x: 0, y: 0 };

// Tuple Types
// Tuples are arrays with a fixed number of elements, where each element may have a different type
type Pair = [string, number];
let pair: Pair = ["hello", 42];

// Advanced Union Types
type Result<T> = { success: true, value: T } | { success: false, error: string };

function divide(a: number, b: number): Result<number> {
  if (b === 0) {
    return { success: false, error: "Division by zero" };
  }
  return { success: true, value: a / b };
}

// Using the Result type
const result = divide(10, 2);
if (result.success) {
  console.log("Result:", result.value);
} else {
  console.log("Error:", result.error);
}

// Intersection Types with Functions
type Loggable = {
  log: (message: string) => void;
};

type Serializable = {
  serialize: () => string;
};

type LoggableAndSerializable = Loggable & Serializable;

const obj: LoggableAndSerializable = {
  log: (message) => console.log(message),
  serialize: () => JSON.stringify(obj)
};

// Using type with generics
type List<T> = {
  items: T[];
  add: (item: T) => void;
  remove: (item: T) => void;
};

// Implementing the generic type
const numberList: List<number> = {
  items: [],
  add: (item) => numberList.items.push(item),
  remove: (item) => {
    const index = numberList.items.indexOf(item);
    if (index > -1) {
      numberList.items.splice(index, 1);
    }
  }
};