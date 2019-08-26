function isSign(data) {
    for (let i of ['+','-','/','%','*']) {
        if (data === i) {return true;}
    }
    return false;
}

class Stack {
    constructor (array) {
        this.data = [];
        (() => {
            for (let i of array) {
                this._insert(i)
            }
        })()
    }
    value () {
        return this.data[0];
    }
    _insert (data) {
        this.data.push(data)
        if (isSign(data)) {
            this._evaluate();
        }
    }
    _evaluate () {
        let sign = this.data.pop();
        let b = this.data.pop();
        let a = this.data.pop();
        this.data.push(this._doTheMath(a,sign,b))
    }

    _doTheMath(a,sign,b) {
        let ret;
        a = Number(a)
        b = Number(b)
        switch (sign) {
            case '+': { ret = a + b; break; }
            case '-': { ret = a - b; break; }
            case '%': { ret = a % b; break; }
            case '/': { ret = a / b; break; }
            case '*': { ret = a * b; break; }
        }
        return ret;
    }
}

let a = ["2", "1", "+", "3", "*"]
let b = ["4", "13", "5", "/", "+"]
let c = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]

let aloha1 = new Stack(a)
console.log('expected 9')
console.log(aloha1.value())

let aloha2 = new Stack(b)
console.log('expected 6')
console.log(aloha2.value())

let aloha3 = new Stack(c)
console.log('expected 22')
console.log(aloha3.value())


//----------------------------------

const functionLib = {
    "+": function (x, y) {return  y + x;},
    "-": function (x, y) {return  y - x;},
    "/": function (x, y) {return  y / x;},
    "*": function (x, y) {return  y * x;},
    "%": function (x, y) {return  y % x;}
  };
  
  let a = ["2", "1", "+", "3", "*"]; //9
  let b = ["4", "13", "5", "/", "+"]; //6
  let c = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]; //22
  
  function reversePolish(array) {
    let stack = [];
    for (let ele of array) {
      ele in functionLib
        ? stack.push(functionLib[ele](stack.pop(), stack.pop()))
        : stack.push(parseInt(ele))
    }
    return stack.pop()
  }
  
  console.log(reversePolish(a))
  console.log(reversePolish(b))
  console.log(reversePolish(c))
  

//---------------------

const functionLib = {
    "+": function (x, y) {return  y + x;},
    "-": function (x, y) {return  y - x;},
    "/": function (x, y) {return  y / x;},
    "*": function (x, y) {return  y * x;},
    "%": function (x, y) {return  y % x;}
  };
  
  let a = ["2", "1", "+", "3", "*"]; //9
  let b = ["4", "13", "5", "/", "+"]; //6
  let c = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]; //22
  
  function reversePolish(array) {
    let stack = [];
    for (let ele of array) {
      ele in functionLib
        ? stack.push(functionLib[ele](stack.pop(), stack.pop()))
        : stack.push(parseInt(ele))
    }
    return stack.pop()
  }
  
  console.log(reversePolish(a))
  console.log(reversePolish(b))
  console.log(reversePolish(c))
  