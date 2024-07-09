var map = new Map();
map.set(1, "angular.js");
map.set(2, "vue.js");
map.set(3, "react.js");

let subj = map.entries();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// using loop 
for (let i = 0; i < map.size; i++) {
    console.log(subj.next().value);
}
