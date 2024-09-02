type KeyInput = "up" | "down" | "right" | "left";

function doSomething(keyPressed: KeyInput)  {
    if(keyPressed == "up") {
        console.log("up arrow is trigged")
    }
    // do something
}

doSomething("up");
doSomething("lakds");