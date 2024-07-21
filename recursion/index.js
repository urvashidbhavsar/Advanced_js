let decrementNum = (number) => {
    if (number === 0) return;
    console.log(number);
    decrementNum(number - 1);
}
decrementNum(10)