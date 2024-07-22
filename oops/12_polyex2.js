class main {
    display() {
        console.log("main class invoked");
    }
}
class sub extends main {
    display() {
        console.log("child class invoked");
    }
}
var cls = [new main(), new sub()];
cls.forEach(function (msg) {
    msg.display()
})