function addition(add) {
    console.log(add);
}
function sum(num1, num2, numadd) {
    var res = num1 + num2;
    numadd(res);
}
sum(5, 6, addition)