// interface that is most important concept in ts

/* 
    Interface is very important and very helpful for implimenting functions
    We can make one constructor as well for making (While impliment interface as a classs
        than we need to make constructor is good 
    )
    Inteface is like a object and that is make our work more easy
*/

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}
