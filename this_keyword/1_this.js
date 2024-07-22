var person = {
    name: "Urvashi",
    number: 8794563201,

    fullDetails: function () {
        return this.name + " " + this.number;
    }
}
var data = person.fullDetails();
console.log(data);