function caesarCipher (message, shift) {
	var shift = shift || -3;
	return message.split("").map(function(letter){
		if (letter >= "A" && letter <= "Z") {
			if (String.fromCharCode(letter.charCodeAt(0) + shift) < "A") 
				return String.fromCharCode(letter.charCodeAt(0) + shift + 26);
			if (String.fromCharCode(letter.charCodeAt(0) + shift) > "Z")
				return String.fromCharCode(letter.charCodeAt(0) + shift - 26);
			return String.fromCharCode(letter.charCodeAt(0) + shift);
		}
		else if(letter >= "a" && letter <= "z") {
			if (String.fromCharCode(letter.charCodeAt(0) + shift) < "a") 
				return String.fromCharCode(letter.charCodeAt(0) + shift + 26);
			if (String.fromCharCode(letter.charCodeAt(0) + shift) > "z")
				return String.fromCharCode(letter.charCodeAt(0) + shift - 26);
			return String.fromCharCode(letter.charCodeAt(0) + shift);
		} else {
			return letter;
		}
	}).join("");
}

var encrypted = caesarCipher("brutus");

console.log(encrypted);
//=> "_orqrp"

encrypted = caesarCipher("Et tu, brute?");

console.log(encrypted);
//=> "Bq qr, _orqb?"

// Left shift of 4
encrypted = caesarCipher("Et tu, brute?", -4);

console.log(encrypted);
//=> "Ap pq, ^nqpa?"

// Right shift of 4
encrypted = caesarCipher("Et tu, brute?", 6);

console.log(encrypted);
//=> "Kz za, hxazk?"