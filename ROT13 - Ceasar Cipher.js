const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


function convert (letter) {
    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === letter) {
            if (i > 12) { return alphabet[i-13]}
            return alphabet[i+13];
        }
    }
}

function rot13 (str) {
    str = str.split('');
    for ( let i = 0; i< str.length ;i++) {
        if (alphabet.includes(str[i])) {
            str[i] = convert(str[i])
        }
    }
    return str.join('');
}


// --------------------------------------

const alphabet = new Set ('ABCDEFGHIKJLMNOPQRSTUVWXYZ'.split(''))

function ord (character) {
	return character.charCodeAt(0);
}
function chr (number) {
	return String.fromCharCode(number)
}

function shift (character) {
	if (!alphabet.has(character)) { return character;}
	return (ord(character) - ord('A')) >= 13 ? chr(ord(character)-13) : chr(ord(character)+13);
}

function rot13 (str) {
	return str.split('').map(shift).join('');
}

