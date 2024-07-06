function emp(id, name) {
    this.id = id;
    this.name = name;
}
function employee(id, name) {
    emp.call(this, id, name);
}
console.log(new employee(101, "Urvashi").id);
console.log(new employee(101, "Urvashi").name);
