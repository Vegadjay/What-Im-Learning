type KeyInput = "up" | "down" | "right" | "left";

function doSomething(keyPressed: KeyInput)  {
    if(keyPressed == "up") {
        console.log("up arrow is trigged")
    }
    // do something
}

doSomething("up");
// doSomething("lakds");


// while you doing this instand of doing this make one enum and add all the values into that enum like this


enum Direction {
    // also you can change the value of this up down and so all like this
    Up = 'up',
    Down = 'down',
    right = "right",
    left = "left"

    // Up = "up";
    // Down = "down";
    // Right = "right";
    // Left = "left";
    
}

// and now do this

function doingSomething( keyPressed : Direction) {
    if(keyPressed == Direction.Up) {
        // do something
    }
    else if ( keyPressed = Direction.Down) {
        // do something
    }
    // doing this repetedly
}

console.log(Direction.Up);
console.log(Direction.Down);