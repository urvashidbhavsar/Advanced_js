class main {
    display() {
        console.log("main class invoked");
    }
}
class sub extends main {

}
var s = new sub();
s.display()