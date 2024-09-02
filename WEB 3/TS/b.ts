interface validUser {
    firstName: string;
    lastName: string;
    acNo: number;
    age:number;
    isMarried:boolean;
}

class User implements validUser {
    firstName: string;
    lastName: string;
    acNo: number;
    age:number;
    isMarried:boolean;


    constructor(fname: string, lname: string, acNo: number,isMarry:boolean) {
        this.firstName = fname;
        this.lastName = lname;
        this.acNo = acNo;
        this.isMarried = isMarry;
    }

    checkValid(age:number) {
        if(age >  18 ) {
            console.log("Person is valid for open account in bank")
        }
        else{ 
            console.log("Person in not valid for open account in bank");
        }
    }
}

const p1 = new User("Jayshukh", "Rabadiya" , 122221, false);
p1.checkValid(19);