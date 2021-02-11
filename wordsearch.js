const transpose = function (matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let newArr = [];
    for (let col = 0; col < cols; col++) {
      newArr[col] = [];
    }
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        newArr[col][row] = matrix[row][col];
      }
    }
  return newArr;
  };


const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    
    let output;
    let array = [];

    for (let h of horizontalJoin) {
      array.push(h)
    }
    
    for (let v of verticalJoin) {
      array.push(v)
    }
    
    // console.log(array)

    for (let el of array) {
          if (el.includes(word)) {
            output = true ;
          } 
    }

    if (output) {
      return true
    }

    else {
      return false
    }

    
  
  
};



// const result = wordSearch([
//   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'WHCSDGHHYERL')

// console.log(result);
module.exports = wordSearch