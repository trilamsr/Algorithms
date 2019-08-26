const QUEEN = "$";
const BLANK = "_";

function nQueen(n) {
    let cols = Array(n).fill(0);
    let leftDia = Array(n).fill(0);
    let rightDia = Array(n).fill(0);
    let ret = [];
    let state = {
        ret: ret,
        visited: [cols, leftDia, rightDia],
        cache: [],
    };
    solve(0, n, state);
    return ret;
}

function solve(row, target, state) {
    let { cache, ret } = state;
    if (row === target) {
        ret.push(cache.join('\n'));
        return;
    }
    for (let col = 0; col < target; col++) {
        let position = [row, col];
        if (isSafe(position, state, target)) {
            toggle(position, state, target);
            solve(row + 1, target, state);
            toggle(position, state, target);
        }
    }
}

function isSafe(position, state, size) {
    let { visited } = state;
    let [cols, leftDia, rightDia] = visited;
    let [r, c] = position;
    return !cols[c] && !leftDia[r + c] && !rightDia[size - r + c];
}

function toggle(position, state, size) {
    let [r, c] = position;
    let {visited, cache} = state;
    let [cols, leftDia, rightDia ] = visited;
    let on = cols[c]

    cols[c] === 1 ? cols[c] === 0 : cols[c] === 1;
    leftDia[r + c] === 1 ? leftDia[r + c] === 0 : leftDia[r + c] === 1;
    rightDia[size - r + c] === 1 ? rightDia[size - r + c] === 0: rightDia[size - r + c] === 1;


    if (on) {
        cache.pop()
    } else {
        let currentLine = Array(size).fill(BLANK);
        currentLine[c] = QUEEN;
        cache.push(currentLine.join(' '))
    }
}


let nq = nQueen(5)
for (const elem of nq) {
    console.log(elem);
    console.log();
  }