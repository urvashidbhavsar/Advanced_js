function calledCallback(callback) {
    // call the callback function
    callback();
}
function newcallFunction() {
    console.log("this is higher function example");
} calledCallback(newcallFunction);