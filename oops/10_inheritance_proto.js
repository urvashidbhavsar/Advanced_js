// constructor
function person(name) {
    this.name = name;
}
person.prototype.getName = function () {
    return this.name;
};
// another constructor
function employee(doj, sal) {
    this.doj = doj
    this.sal = sal
}
var per = new person("Urvashi");
employee.prototype = per; // person treat as a parent of emp
var emp = new employee("10-05-2024", 25000);
console.log(`${emp.getName()} | ${emp.doj} | ${emp.sal}`);