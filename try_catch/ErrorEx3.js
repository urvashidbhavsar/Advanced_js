try {
    var a = 1;
    if (a == 2) {
        console.log("equal");
    }
} catch (e) {
    console.log(e);
} finally {
    console.log("a value is 2");
}