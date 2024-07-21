function calculateVolume(length) {
    return function (breath) {
        return function (height) {
            return length * breath * height;
        }
    }
}
console.log(calculateVolume(4)(5)(6));