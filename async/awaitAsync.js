async function display() {
    let text = new Promise(function (solve, reject) {
        solve("call async promise");
    });
    console.log(await text);
}
display()