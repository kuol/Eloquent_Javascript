var arrayToList = function(a) {
    if (a.length === 0) {
        return {value: undefined,
                rest: null};
    }
    if (a.length === 1) {
        return {value: a[0],
                rest: null};
    } else {
        return {value: a[0],
                rest: arrayToList(a.slice(1, a.length))};
    }
}


var listToArray = function(l) {
    var out = [];
    do {
        out.push(l.value);
        l = l.rest;
    } while (l != null); 
    return out;
}

var prepend = function(val, l) {
    return {value: val,
            rest: l};
}

// Non-recursive version
/*
var nth = function(l, n) {
    while (n != 0) {
        n--;
        l = l.rest;
    }
    return l.value;
}
*/

// Recursive version
var nth = function(l, n) {
    if (n === 0) {
        return l.value;
    } else {
        return nth(l.rest, n-1);
    }
}


/* Test arrayToList */
//console.log(arrayToList([]));
//console.log(arrayToList([10,20,30]));


/* Test listToArray */
//var myList = arrayToList([10,20,30]);
//console.log(myList);
//console.log(listToArray(myList));
//console.log(myList);


/* Test prepend */
//console.log(prepend(10, prepend(20, null)));


/* Test nth */
console.log(nth(arrayToList([10, 20, 30]), 1));



