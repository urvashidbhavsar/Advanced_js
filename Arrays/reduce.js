var arr = [1, 2, 3, 4];
var res = arr.reduce(function (accumulator, currentVal) {
    return accumulator + currentVal
}, 0)
console.log("Total " + res);

var sum = [30, 15, 10];
function reduce_val(net, n) {
    return net - n;
}
console.log(sum.reduce(reduce_val));
