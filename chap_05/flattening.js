var arrays = [[1,2,3], [4,5], [6]];

function flatten(a) {
    return a.reduce((prev, curr) => prev.concat(curr));
}

console.log(flatten(arrays));
