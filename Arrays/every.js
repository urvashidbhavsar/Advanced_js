// var num = [30, 40, 50, 60, 10];
var num = [40, 50, 60, 70, 78];

function checkNum(val) {
    return val > 30;
}
console.log(num.every(checkNum));