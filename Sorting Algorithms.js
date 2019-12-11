function swap(array, x, y) {
  let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}

function bubbleSort(array) {
  for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
      }
    }
  }
  return array;
}

function bubbleSortWhile (arr) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length-2; i++) {
      if (arr[i] > arr[i+1]) {
        swap(arr, i, i+1)
        isSorted = false;
      }
    }
  }
}

function bubbleRecursive(array) {
  function inner(array, n) {
    if (n === 1) {
      return array;
    }
    for (let i = 0; i < n; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    inner(array, n - 1);
  }
  inner(array, array.length);
  return array;
}
//------------------------------------
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let iMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[iMin] > array[j]) {
        iMin = j;
      }
    }
    swap(array, i, iMin);
  }
  return array;
}

function selectionRecursive(array) {
  function sort(array, current) {
    if (current === array.length) {
      return;
    }
    const head = minIndex(array, current, current);
    swap(array, head, current);
    sort(array, current + 1);
  }
  function minIndex(array, index, ret) {
    if (index === array.length) return ret;
    if (array[index] < array[ret]) ret = index;
    return minIndex(array, index + 1, ret);
  }
  sort(array, 0);
  return array;
}
//------------------------------
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = i;
    while (current > 0 && array[current] < array[current - 1]) {
      swap(array, current, current - 1);
      current--;
    }
  }
  return array;
}

function recurInsert(array, n = 1) {
  function recur(array, index) {
    if (index === 0 || array[index] > array[index - 1]) {
      return;
    } else {
      swap(array, index, index - 1);
      recur(array, index - 1);
    }
  }
  if (n === array.length) {
    return array;
  }
  recur(array, n);
  return recurInsert(array, n + 1);
}

//---------------------------
function mergeSort(array) {
  if (array.length === 0) {
    return array;
  }
  const mid = array.length / 2;
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let li = 0;
  let ri = 0;
  let array = [];
  while (li < left.length && ri < right.length) {
    left[li] <= right[ri] ? array.push(left[li++]) : array.push(right[ri++]);
  }
  while (li < left.length) {
    array.push(left[li++]);
  }
  while (ri < right.length) {
    array.push(right[ri++]);
  }
  return array;
}

//--------------------------
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = array.length / 2;
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let array = [];
  while (left.length && right.length) {
    left[0] <= right[0] ? array.push(left.shift()) : array.push(right.shift());
  }
  return array.concat(left).concat(right);
}

const elements = [6, 3, 10, 2, 8, 1, 8, 9, 2];
mergeSort(elements);

//-----------------------------
function mergeSort(array, aux = [...array], lo = 0, hi = array.length - 1) {
  if (lo >= hi) return;
  let mid = lo + Math.floor((hi - lo) / 2);
  mergeSort(array, aux, lo, mid);
  mergeSort(array, aux, mid + 1, hi);
  merge(array, aux, lo, mid, hi);
}

function merge(array, aux, lo, mid, hi) {
  for (let l = lo; l <= hi; l++) {
    aux[l] = array[l];
  }
  let li = lo;
  let ri = mid + 1;
  let k = lo;
  while (li <= mid && ri <= hi) {
    array[k++] = aux[li] < aux[ri] ? aux[li++] : aux[ri++];
  }
  while (li <= mid) {
    array[k++] = aux[li++];
  }
  while (ri <= hi) {
    array[k++] = aux[ri++];
  }
}

mergeSort(elements);
console.log(elements);

//------------------------ Quick Sort
const elements = [6, 3, 10, 2, 8, 1, 8, 9, 2];
function swap(array, x, y) {
  [array[y], array[x]] = [array[x], array[y]];
}

function partition(array, lo, hi) {
  let position = lo + Math.floor((hi - lo + 1) * Math.random());
  let pivot = array[position];
  for (let i = lo; i <= hi; i++) {
    if (array[i] < pivot) {
      swap(array, i, lo++);
    } else if (array[i] > pivot) {
      swap(array, i--, hi--);
    }
  }
  return [lo, hi];
}

function quickSort(array) {
  qSort(array, 0, array.length - 1);
  return array;
}

function qSort(array, lo, hi) {
  if (lo >= hi) return;
  let [pLo, pHi] = partition(array, lo, hi);
  qSort(array, lo, pLo - 1);
  qSort(array, pHi + 1, hi);
}

quickSort(elements);
