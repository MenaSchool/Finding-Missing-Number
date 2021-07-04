let a = [1, 2, 3, 5];
count = 5;
var missing = new Array();
for (var i = 1; i <= count; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing); // to check the result.

//! other solution
function findNumber(arr) {
  var n = arr.length;
  var total = ((n + 2) * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    total -= arr[i];
  }
  return total;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(findNumber(arr));

//! other solution

/*
//! other solution

var arr = [2, 3, 4, 5];

var min = _.min(arr);
var result = [];

for (var i = 0; i < min; i++) {
  result.push(i);
}
result; // [0, 1];

//! other solution

Array.from({ length: Math.max(...b) }, (_, x) =>
  !b.includes(x + 1) ? x + 1 : false
).filter(Boolean);

*/
