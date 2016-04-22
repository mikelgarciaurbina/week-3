function decoder(words) {
	var index = 0;
	var secretMessage = "";
	words.forEach(function(word){
		secretMessage += word[index];
		index = (index + 1) % 5;
	});
	return secretMessage;
}


var words, message;
words = [
	"dead",
	"bygone",
	"landing",
	"cheaply",
	"assumed",
	"incorrectly",
	"attention",
	"agent"
];

message = decoder(words);
console.log(message);

var words2 = [
 "January", "lacks", "caveats",
 "hazardous", "DOORS", "crying",
 "arrogantly", "climate", "proponent",
 "rebuttal"
];

message = decoder(words2);
console.log(message);