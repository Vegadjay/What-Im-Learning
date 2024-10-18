function delayCalled(fn) {
    setTimeout(fn, 100);
}
;
delayCalled(function printHello() {
    console.log("Hi there");
});
