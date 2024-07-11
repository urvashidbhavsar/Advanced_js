var arr1 = ["a", "b", "c", "d"];
var arr2 = [1, 2, 3, 4];

var res = arr1.flatMap((arr1, index) => [arr1, arr2[index]])
console.log(res);