var map = new Map();
map.set(1, "angular.js");
map.set(2, "vue.js");
map.set(3, "react.js");

console.log("Total map : " + map.size);
map.delete(3);
console.log("After clear total map : " + map.size);