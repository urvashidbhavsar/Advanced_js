// let promise_func = new Promise(function(myresolve, myreject){
//     myresolve(); // when success
//     myreject(); // when reject
// });
// promise_func.then(
//     function(value) // success code 
//     function(error) // error code 
// )
function msg() {
    console.log("My message");
}

let promise_func = new Promise(function (solve, reject) {
    let x = 0;

    if (x == 0) {
        solve("ok")
    } else {
        reject("cancel")
    }
})
promise_func.then(
    function (value) { msg(); },
    function (error) { msg(); }
)