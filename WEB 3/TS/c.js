// First Way to make that
function doSomething1(keyPressed) {
    // do something;
    // if we make one if else that do someting while key press than do that
    if (keyPressed == "up") {
        // than do somethig.
    }
    else {
        // do something
    }
    ;
}
;
// Calling fn like this while we make simple function that only print any thing
doSomething1("up");
// calling that enums like this
// second way to impliment that function
// enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));
;
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["Down"] = "down";
    Direction2["Right"] = "right";
    Direction2["Left"] = "left";
})(Direction2 || (Direction2 = {}));
function doSomething(keyPressed) {
    // do something;
    // if we make one if else that do someting while key press than do that
    if (keyPressed == Direction.Up) {
        // than do somethig.
    }
    else {
        // do something
    }
}
console.log(Direction.Up);
console.log(Direction.Down);
// this print value like up and down
console.log(Direction2.Up);
console.log(Direction2.Down);
// Calling fn like this while we make simple function that only print any thing
// doSomething("Up")
// calling that enums like this
doSomething(Direction.Up);
// enums convert that all values in 0,1,2,3
/*
->    that make code to more clear.
->    while print this all values that print up == 0, down == 1 and so on..
->    also we print any string or any other values to
->    while we assign one to string value that we must assign string value to all of the element otherwise
        ts gives as error like ts is not understand what we want..
        
*/
