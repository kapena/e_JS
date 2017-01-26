// defining a function
var square = function (x) {
    return x * x;
};
// produce square root of 12
console.log(square(12));

// makeNoise function
// no params
var makeNoise = function(){
    console.log('Beep!');
};
// call makeNoise
makeNoise();

// power function produces a value
// two params
var power = function(base, exponent){
    // local result variable
    // everytime power is called result will be created again
    var result = 1;
    // loop that counts
    // exponent param
    for(var count = 0; count < exponent; count++){
        // result = result * base
        // base param
        result *= base;
    }
    // return result var
    return result;
};
// 2,10 params 2 = base 10 = exponent
console.log(power(2,10));


// Scope
// variables created inside of a function are local to that function
// variables created outside of a function are gobal to the function
// you can access gobal variables outside or inside a function

var gobal = "outside";
var f1 = function(){
    // declared local var with same name gobal
    // cant use local bc gobal var used twice therefor local not rec
    var gobal = 'inside f1';
};
f1();
console.log(gobal);
// outside


var f2 = function(){
    // did not declare gobal twice
    // assigning gobal new value
    gobal = 'inside f2';
};

f2();
console.log(gobal); // inside f2

// f1
var landscape = function (){
    // string of landscape
    var result = "";
// f2
var flat = function (size){
    // loop counts to see how much flat space
    // count cannot be seen bc it is declared outside of landscape scope
    for (var count = 0; count < size; count++){
        // flat area
        result += "_";
    }
};
// f3
var mountain = function (size){
    // mountain
    result += "/";
    for (var count = 0; count < size; count++) {
        // mountain area
        result += "'";
        result += '\\';
    }
};
flat(3);
mountain(4);
flat(5);
mountain(1);
flat(1);
return result;
};
console.log(landscape());
