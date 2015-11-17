var range = function(start, end, step) {
    var out = [];
    for(var i = start; step > 0 ? (i < end+1) : i > end -1 ; i += step) {
        out.push(i);
    }
    return out;
}

var sum = function(a) {
    var out = 0;
    for(var i = 0; i < a.length; i++) {
        out += a[i];
    }
    return out;
}

console.log(sum(range(1, 10)));
console.log(range(5,2,-1));
console.log(range(1,10,2));
