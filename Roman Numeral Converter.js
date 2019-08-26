const human = [ 1 ,  4   , 5 ,  9  , 10,  40 , 50 ,  90 , 100, 400 , 500 , 900 , 1000];
const roman = ['I', 'IV' ,'V', 'IX','X', 'XL', 'L', 'XC', 'C', 'CD', 'D' , 'CM', 'M'];

function convertToRoman(num) {
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