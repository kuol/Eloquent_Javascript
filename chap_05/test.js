/*
function unless(test, then) {
    if (!test) then();
}
function repeat(times, body) {
    for (var i = 0; i < times; i++) 
        body(i);
}

repeat(3,function(n){
    unless(n%2, function(){
        console.log(n, "is even");
    });
});

*/



// JSON object
var ANCESTRY_FILE = require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(typeof ancestry);
console.log(ancestry.length);

// Filtering an array
/*
function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
        if(test(array[i]))
            passed.push(array[i]);
    }
    return passed;
}

console.log(filter(ancestry, function(person){
    return person.born > 1900 && person.born < 1925;
}));

console.log(ancestry.filter(function(person) {
    return person.father == "Carel Haverbeke";
}));
*/

// Transforming with map

// Summarizing with reduce
/*
function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
}

console.log(reduce([1,2,3,4], function(a,b){
    return a+b;
},0));

console.log(reduce(ancestry, function(a,b){
    return (a.born < b.born ? a : b);
}, ancestry[0]));
*/

// Composability
/*
function average(array) {
    function plus(a, b) {
        return a+b;
    }
    return array.reduce(plus) / array.length;
}

function age(p) { return p.died - p.born; }
function male(p) { return p.sex === "m"; }
function female(p) { return p.sex === "f"; }

console.log(average(ancestry.filter(male).map(age)));
console.log(average(ancestry.filter(female).map(age)));
*/

// Great x 4
/*
var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

console.log(byName["Philibert Haverbeke"]);
*/

// Bining
var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];
function isInSet(set, person) {
    return set.indexOf(person.name) > -1;
}

console.log(ancestry.filter(function(person){
    return isInSet(theSet, person);
}));

console.log(ancestry.filter(isInset.bind(null, theSet)));
















