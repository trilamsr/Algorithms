//return all permutation of a letter;
function variation(str) {
  let container = [];
  permute(str.split(""), [], container);
  return container;
}

function permute(array, chosen, container) {
  if (array.length === 0) {
    container.push(chosen.join(""));
  }
  for (let i in array) {
    let temp = array.splice(i, 1);
    chosen.push(temp);
    permute(array, chosen, container);
    array.unshift(chosen.pop());
  }
}

const boe = "boe";
variation(boe); // [ 'boe', 'beo', 'ebo', 'eob', 'beo', 'boe' ]
//----------------------

class Board {
    constructor(size) {
      this.board = [];
      (() => {
        for (let i = 0; i < size; i++) {
          let temp = [];
          for (let j = 0; j < size; j++) {
            temp.push(0);
          }
          this.board.push(temp);
        }
      })();
      }
  }
  const aloha = new Board (5);
  console.log(aloha.board)
  
  function isValid(board, row, col) {
      for (let i = 0 i < board.length; i++) {}
  }
  
  function solveNQueen(n, cRow, cCol, board, ret) {
      
  }
  
  function nQueen (n, board) {
      let ret = [];
      solveNQueen (board.size, 0, 0, board, ret)
      return ret;
  }
  