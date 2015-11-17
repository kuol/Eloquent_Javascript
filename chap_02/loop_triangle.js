// Note: console.log() automatically add '\n' after the argument.

for (var i=0; i<7; i++) {
    var s = '';
    for (var j=0; j<i+1; j++){
        s = s + '\#';
    }
    console.log(s);
}
