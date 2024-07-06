var num = [3, 8, 4, 6, 1]
var maxnum = Math.max.apply(null, num)
console.log(maxnum);

var series = [1, 2, 3, 4];
var add_series = [5, 6, 7, 8];
series.push.apply(series, add_series)
console.log(series);