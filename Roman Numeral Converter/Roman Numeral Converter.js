const human = [ 1,   5,  10 , 50,  100, 500, 1000];
const roman = ['I', 'V', 'X', 'L', 'C', 'D',  'M'];

function convertToRoman(num) {
    
    
    let str = num.toSting();
    if (str[str.length-1] === 4) {return}
    if (str[str.length-1] === 9) {return} 
    if (human.includes(num)) { return roman[human.indexOf(num)]}
    if (num  <  0) {
        for(let i = 0; i < human.length ;i++) {
            if (human[i] + num > 0) {
                return convertToRoman(num+human[i]).concat([roman[i]]).join('')
            }
        }
    }
    if (num  >  0) {
        for (let i = human.length-1; i>=0 ;i--) {
            if (num - human[i] > 0) {
                return [roman[i]].concat(convertToRoman(num-human[i])).join('')
            }
        }
    }
}

console.log(convertToRoman(29))
console.log(convertToRoman(44))
console.log(convertToRoman(204))
