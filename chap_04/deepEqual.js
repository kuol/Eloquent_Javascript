var deepEqual = function(o1, o2){
    if (typeof o1 === 'object' && typeof o2 === 'object' && o1 !== null && o2 !==null) {
        for (var key in o1) {
            return deepEqual(o1[key], o2[key]);
        }
    } else {
        return o1 === o2;
    }
}




var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));





