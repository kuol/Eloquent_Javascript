function every(array, func) {
    return array.map( x => func(x) ).reduce( (x,y) => x && y ); 
}

function some(array, func) {
    for (var i=0; i<array.length; i++) {
        if (func(array[i]))
            return true;
    }
    return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// // → true
console.log(some([2, 3, 4], isNaN));
