var thispage = {
    name: "Current Page",
    getName: function () {
        return this.name
    }
}
var newpages = thispage.getName;
var allpage = newpages.bind(thispage);
console.log(allpage());