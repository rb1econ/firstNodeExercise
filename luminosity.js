var fs = require('fs');

var theInput = process.argv;

var arrGeeBee = theInput.slice(2);


var luminosity = function(r, g, b){
   looom = 0.2126*arrGeeBee[0] + 0.7152*arrGeeBee[1] + 0.0722*arrGeeBee[2];
   if (looom>155){return "light"} else{return "dark"};
};

console.log(luminosity());