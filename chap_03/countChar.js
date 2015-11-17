var countChar = function(myString, x) {
    var N = 0;
    for(var i = 0; i < myString.length; i++) {
        if (myString.charAt(i) === x)
            N++;
    }
    return N; 
}

console.log(countChar("kakkerlak", "k"));
