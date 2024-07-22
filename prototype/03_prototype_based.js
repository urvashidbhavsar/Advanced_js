class main {
}
main.prototype.display = function () {
    console.log("main class invoked");
}
class sub extends main {
}
sub.prototype = Object.create(main.prototype);
var cls = [new main(), new sub()];
cls.forEach(function (msg) {
    msg.display()
})