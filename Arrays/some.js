// var arr = [12, 10, 11, 15];
var arr = [2, 8, 1, 5];
function test(arr) {
    return (arr > 10)
}
var res = arr.some(test)
console.log(res);