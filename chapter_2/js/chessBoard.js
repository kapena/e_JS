var boardSize = 8;
var boardString = '';
// loops to calc y and x axis hash placement
// think of x and y as white and black squares
// white square = x and y are even. black square = odd.
for (var y = 0; y < boardSize; y++){
    for (var x = 0; x < boardSize; x++) {
        // x + y is true if the remainder of the division is even
        // even = a white square
        if ((x + y) % 2 === 0){
            boardString += ' ';
        } else {
            boardString += '#';
        }
    }
    // newline for each set of hashes
    boardString += '\n';
}
console.log(boardString);
