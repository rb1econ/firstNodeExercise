var lumfxn = function(r, g, b){
   looom = 0.2126*r + 0.7152*g + 0.0722*b;
   console.log(looom);
};

var dkfxn = function(r,g,b){
   console.log(r-r*0.2, g-g*0.2, b-b*0.2);
};

// console.log(lumfxn());

module.exports = {
   luminosity: lumfxn,
   darken: dkfxn
};