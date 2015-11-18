var ANCESTRY_FILE = require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
    return array.reduce((a,b) => a+b) / array.length;
}

var byName = {};
ancestry.forEach( x => byName[x.name] = x);

var age_diff = [];
for (var key in byName) {
    var mom = byName[key].mother;
    if (mom in byName)
        age_diff.push(byName[key].born - byName[mom].born);
}

console.log(average(age_diff));

