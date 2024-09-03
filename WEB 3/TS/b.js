function doSomething(keyPressed) {
    if (keyPressed == "up") {
        console.log("up arrow is trigged");
    }
    // do something
}
doSomething("up");
// We can't add this no exists value in function call because this is not define in KeyInput
// doSomething("lakds");
// while you doing this instand of doing this make one enum and add all the values into that enum like this
var Direction;
(function (Direction) {
    // also you can change the value of this up down and so all like this
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["right"] = "right";
    Direction["left"] = "left";
    // Up = "up";
    // Down = "down";
    // Right = "right";
    // Left = "left";
})(Direction || (Direction = {}));
// and now do this
function doingSomething(keyPressed) {
    if (keyPressed == Direction.Up) {
        // do something
    }
    else if (keyPressed = Direction.Down) {
        // do something
    }
    // doing this repetedly
}
console.log(Direction.Up);
console.log(Direction.Down);
