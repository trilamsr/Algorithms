//all permutation of a letter;
function permute(str) {
  let array = str.split("");
  _permute(array, []);
}

function _permute(choices, history) {
  if (choices.length === 0) {
    console.log(history.join(""));
  } else {
    for (let i in choices) {
      history.push(...choices.splice(i, 1));
      _permute(choices, history);
      choices.unshift(history.pop());
    }
  }
}

const boe = "boe";
variation(boe); // [ 'boe', 'beo', 'ebo', 'eob', 'beo', 'boe' ]
//----------------------