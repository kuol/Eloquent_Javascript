var reverseArray = function(a) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
        b.push(a[a.length-1-i]);
    }
    return b;
}

var reverseArrayInPlace = function(a) {
    var m = Math.floor(a.length/2);
    for (var i = 0; i < m; i++) {
        temp = a[a.length-1-i];
        a[a.length-1-i] = a[i];
        a[i] = temp;
    }
    return a; 
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
