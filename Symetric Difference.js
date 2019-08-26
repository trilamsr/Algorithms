function cleanse(x) {
	const array = [];
	for (let i of x) {
		!array.includes(i) ?
			array.push(i) : 0
	}
	return array;
}

function sym(...arguments) {
	let elements = arguments.map(x => cleanse(x))
	return elements
}

findSym (array) {
	const array = [];
	for (let i of array[0]){
		if (!array[1].includes) {
			array.push(i)
		}
	}
	for (let i of array[1]){
		if (!array[0].includes) {
			array.push(i)
		}
	}
	return array;
}
