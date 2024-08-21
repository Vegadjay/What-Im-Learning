var checkUser = /** @class */ (function () {
    function checkUser(f, l, a) {
        this.firstname = f;
        this.latsname = l;
        this.age = a;
    }
    return checkUser;
}());
var user12 = new checkUser("jay", "vegad", 12);
console.log(user12.firstname);
