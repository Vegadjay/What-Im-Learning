// The diff between interface and type is interface is extand by the class and type does not
// type is extend using & like this

/*
type PersonType = {
    firstname: string;
};

type EmployeeType = PersonType & {
    employeeId: number;
};

type studentId = string | number



// also you can make this 

// Union and Intersection types with `type`
type StringOrNumber = string | number;

type Name = {
    firstname: string;
};

type EmployeeWithAge = Name & {
    age: number;
};

let value: string | number;

value = "Jay" // valid 
value = 30 // valid;
value = true // invalid 


*/


type user = {
    firstname: string;
    latsname: string;
    age: number
}

interface user1 {
    firstname: string;
    latsname: string;
    age: number
}

// class checkUser implements user1 {
//     firstname: string;
//     latsname: string;
//     age: number;

//     constructor(f: string, l: string, a:number) {
//         this.firstname = f;
//         this.latsname = l;
//         this.age = a;
//     }

// }

// Here you can make Type and use it using gate like or,and  many other

type Employee = {
  name: string;
  age: number;
};

type Person = {
  name: string;
  salary: number;
};

type EmployeeOrPerson = Employee & Person;

const t: EmployeeOrPerson = {
  name: "Yogi",
  age: 10,
  salary: 2000,
};
