// create an object
const person = {
    firstname: "Raj",
    lastname: "Patel",
    mobileNo: 9856332566,
};

// destructor
const { lastname, firstname = "Rohan" } = person;

console.log(person);
console.log(person.firstname);
