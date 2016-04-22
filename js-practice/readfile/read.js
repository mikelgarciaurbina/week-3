var fs = require('fs');
function print (error, content) {
	if (error) {
		console.log('Oh no! Error!', error);
	} else {
		console.log('Success!', content);
	}
}
fs.readFile('file.txt', 'utf8', print);