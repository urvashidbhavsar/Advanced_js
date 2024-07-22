class curr_time extends Date {
    constructor() {
        super();
    }
}
var c = new curr_time();
console.log(`Current Date => ${c.getDate()}-${c.getMonth() + 1}-${c.getFullYear()}`);