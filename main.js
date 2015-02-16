var request = require('request');
var fs = require('fs');
// var all140 = [];

var parsedColors=[];

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('line 9')
      parsedColors = JSON.parse(body);
      // fs.writeFileSync('./color.js', body);  
    }
    var search = process.argv[2].toLowerCase();
     
    var findColor = function(searched){
        newArray = parsedColors.filter(function(obj){
            if(searched === obj.name.toLowerCase()){
                return true;
            }
        });
        return newArray[0].rgb;
        // console.log(parsedColors);
    };
    console.log(findColor(search));
});

