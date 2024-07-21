const numbers = [1, 5, 7, 3, -1, -6, -11, 20];

function removeNg(numbers, callback) {
    const arr = [];
    for (const x of numbers) {
        if (callback(x)) {
            arr.push(x);
        }
    }
    return arr;
}

const deleteNum = removeNg(numbers, (x) => x >= 0);

console.log(deleteNum);