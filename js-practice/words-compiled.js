function decoder(a){var b=0,c="";a.forEach(function(a){c+=a[b];b=(b+1)%5});return c}var words,message;words="dead bygone landing cheaply assumed incorrectly attention agent".split(" ");message=decoder(words);console.log(message);var words2="January lacks caveats hazardous DOORS crying arrogantly climate proponent rebuttal".split(" ");message=decoder(words2);console.log(message);