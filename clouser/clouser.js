const add = (() => {
    // i.e. means private variable
    let counter = 0;
    return function () {
        counter += 1;
        return counter;
    }
})();;
console.log(add());
console.log(add());
console.log(add());
