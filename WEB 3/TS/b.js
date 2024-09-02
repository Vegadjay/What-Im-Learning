var User12 = /** @class */ (function () {
    function User12(fname, lname, acNo, isMarry) {
        this.firstName = fname;
        this.lastName = lname;
        this.acNo = acNo;
        this.isMarried = isMarry;
    }
    User12.prototype.checkValid = function (age) {
        if (age > 18) {
            console.log("Person is valid for open account in bank");
        }
        else {
            console.log("Person in not valid for open account in bank");
        }
    };
    return User12;
}());
var p = new User12("Jayshukh", "Rabadiya", 122221, false);
p.checkValid(19);
