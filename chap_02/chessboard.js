var size = 8;

var s = '';
for (var i=0; i<size; i++) {
    for (var j=0; j<size; j++) {
        if ((i+j) % 2 == 0) {
            s += ' ';
        } else {
            s += '\#';
        }
    }
    s += '\n';
}
console.log(s);


