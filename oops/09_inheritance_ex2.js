class person {
    constructor() {
        this.firstname = "Urvashi"
    }
}
class emp extends person {
    constructor(company, address) {
        super();
        this.company = company;
        this.address = address;
    }
}
var e = new emp("IT", "Surat");
console.log(`${e.firstname} | ${e.company} | ${e.address}`);
