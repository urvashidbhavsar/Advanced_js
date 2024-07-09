var map = new Map();
map.set(1, "angular.js");
map.set(2, "vue.js");
map.set(3, "react.js");

map.forEach(subj => {
    console.log(subj);
});

function display(value, key) {
    console.log(key + " " + value);
}
map.forEach(display)