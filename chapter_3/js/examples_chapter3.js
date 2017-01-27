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

// Clousre
// the ablility to access specific instances of local variables inside an enclosing function
function wrapValue (n){
    // local ref to n param
    var local = n;
    // frozen block of code for later use
    // returning function closing over local var that accesses and returns local var
    return function (){
        // returning local var
        return local;
    };
}
// accessing local var through wrapValue function
var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());


function multiplier (factor){
    // frozen for later use
    return function (number){
        return number * factor;
    };
}

// multiplier function stored in twice var
var twice = multiplier(2);
// calls value in twice var which triggers frozen function
// return number * factor 5 * 5 = 10
console.log(twice(5));


// Recursion
// A function that calls it self

// power function
function power (base, exponent){
    // exponent === 0 false
    if (exponent === 0)
    return 1;
    // false therefor
    // call power function
    // base * power 2 * 3 - 1
    else return base * power(base, exponent - 1);
    console.log(power(2,3));
}

// starting from 1 and repeatedly adding 5 or multiplying 3 an infinite amount of numbers can be produced
// write a function that when given a number tries to find a sequance of additions and multiplicaions that prodouce that number
// 13 could be reached by first multiplying 3 and then adding 5 twice
function findSolution (target){
    function find (start, history){
        // if the current (start) number is the target number then the current history is a way to reach target
        if (start === target)
        return history;
        // if the current number is greater than the target
        else if (start > target)
        // no sense in furthur expolring history. adding and multiplying will only make number bigger
            return null;
        // if still bellow target the function tries both possible paths that start from the current number by calling it self twice
        // if returns something that is not null it is returned
        else return find(start + 5, "(" + history + "+ 5)") ||
        find(start * 3, "(" + history + "* 3)");
    }
    // otherwise second call is returned regardless whether string or null
    return find(1, "1");
}
console.log(findSolution(13));

// Growing functions
// Write a program that prints two numbers, the numbers of cows and chickens on a farm with the words Cows and Chickens after numbers. Zeros padded before both numbers so they are always 3 digits long

// 001 Cows
// 010 Chickens

// places a zero or zeros after number
// 001 010
function zeroPad (num, width){
    var string = String(num);
    // while loop adds 0s in front of number strings until atleast 3 chars long
    while (string.length < width){
        string = "0" + string;
    }
    return string;
}


function printFramInven(cows, chickens){
    // call zeroPad function to add zero and count cows
    // 3 is for how many number we want displayed 007
    console.log(zeroPad(cows,3) + " Cows");
    console.log(zeroPad(chickens,3) + " Chickens");
}
printFramInven(7,10);
