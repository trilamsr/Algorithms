const data = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99];

class Search {
  constructor(dataArray) {
    this.data = dataArray;
    this.dataSorted = dataArray.sorted((a, b) => a - b);
  }
  iterativeSearch(target) {
    for (let i in this.data) {
      if (this.data[i] === target) {
        return i;
      }
    }
    return -1;
  }
  
  binaryIterative (target) {
	let low = 0;
	let high = this.dataSorted.length - 1;
	while (low <= high) {
		const mid = Math.floor(low + (high - low) / 2);
		if (target > this.dataSorted[mid]) {
			low  = mid + 1;
		} else if (target < this.dataSorted[mid]) {
			high = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
    }

    binaryRecursiveSearch (target, low, high) {
        const mid = Math.floor(low + (high-low)/2)
        if (low > high) {
            return -1;
        }
        if (this.data[mid] === target) { return mid;}
        if (this.data[mid] > target) {
            return this.binaryRecursiveSearch (this.data, target, low, mid-1)
        } else if (this.data[mid] < target) {
            return this.binaryRecursiveSearch (this.data, target, mid+1, high)
        }
    }
}
