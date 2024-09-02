import { setTokenSourceMapRange } from "typescript";

type KeyInput = "up" | "down" | "right" | "left";

function doSomething(keyPressed: KeyInput)  {
    if(keyPressed == "up") {
        console.log("up arrow is trigged")
    }
    // do something
}

doSomething("up");
doSomething("lakds");


// while you doing this instand of doing this make one enum and add all the values into that enum like this


enum Direction {
    Up,
    Down,
    Right,
    Left
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

doingSomething(Direction.Up);
doingSomething(Direction.Down);
