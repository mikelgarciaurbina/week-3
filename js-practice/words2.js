function super_decode(sentence, options) {
	var index = 0;
	var secretMessage = "";
	var words = sentence.split(" ");
	if(options.split("-")[1] === "backwards"){
		words = words.reverse();
	}
	for (var i = 0; i < words.length; i++) {
		if(options.split("-")[0] === "odd"){
			if(i % 2 != 0){
				secretMessage += words[i].charAt(index);
				index = (index + 1) % 5;
			}
		} else if(options.split("-")[0] === "even") {
			if(i % 2 == 0){
				secretMessage += words[i].charAt(index);
				index = (index + 1) % 5;
			}
		} else {
			secretMessage += words[i].charAt(index);
			index = (index + 1) % 5;
		}
	}
	return secretMessage;
}

var sentence1 = "Attack her nose under here with an itch";
var sentence2 = "Raul Nuñez call never finished";
var sentence3 = "Start rapping this or countless queasy wizards give back jay-z";
var sentence4 = "inner peace is overrated";
var sentence5 = "Fill the proper tank for the cow";

var message = super_decode(sentence1, "every-backwards");
console.log(message);

var message = super_decode(sentence2, "every-forwards");
console.log(message);

var message = super_decode(sentence3, "every-backwards");
console.log(message);

var message = super_decode(sentence4, "even-forwards");
console.log(message);

var message = super_decode(sentence5, "even-backwards");
console.log(message);