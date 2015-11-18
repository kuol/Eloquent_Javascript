var ANCESTRY_FILE = require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
    return array.reduce((a,b) => a+b) / array.length;
}


var century_age = ancestry.map( x => [Math.ceil(x.died/100), x.died - x.born]);
var result = {};
century_age.forEach( function(x) {
        if (!(x[0] in result))
            result[x[0]] = [];
        result[x[0]].push(x[1]);
    });

for (key in result) {
    result[key] = average(result[key]);
}

console.log(result);

    


