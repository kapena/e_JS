// Loop a triangle
// loop counts to 10
// each time loop increments another # is added to line
for (var tri = "#"; tri.length < 10; tri = tri + "#"){
    console.log(tri);
}

// FizzBuzz
// Print all numbers 1 - 100 with two exceptions
// Numbers divisable by 3 print "Fizz" instead of number
// Numbers divisable by 5 print "Buzz" instead of number

for (var i = 0; i < 100; i++){
    // fizz or buzz string
    var fizzBuzz = '';
    // numbers divisable by 3
    if (i % 3 === 0)
    // assign Fizz to fizzBuzz
    fizzBuzz += 'Fizz';
    // numbers divisable by 5
    if (i % 5 === 0)
    // assign Buzz to fizzBuzz
    fizzBuzz += 'Buzz';
    // combine Fizz and Buzz strings on numbers divisable by 3 & 5
    // i = any number divisable by 3 and 5 = FizzBuzz
    console.log(fizzBuzz || i);
}

// Chessboard
// Create a string that represents a 8 x 8 chessboard with white and black squares # . Use newline characters to seperate lines.

var boardSize = 8;
var boardString = '';
// loop to calc x axis
for (var y = 0; y < boardSize; y++){
    // loop to calc y axis
    for (var x = 0; x < boardSize; x++){
        // odd = black
        // even = white
        // x + y is true if the remainder of the division is even
        if ((x + y) % 2 === 0){
            // create white square
            boardString += ' ';
        } else
            // create black square
            boardString += '#';
    }
    // newline
    boardString  += '\n';
}
console.log(boardString);
