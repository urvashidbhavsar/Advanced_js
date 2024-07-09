// function return the value
function multipiler(factor) {
    return function (x) {
        return x * factor;
    }
}
let double = multipiler(2);
let triple = multipiler(3);

console.log(double(2));
console.log(triple(3));