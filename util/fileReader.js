var fs = require('fs');

fs.readFile('license.txt', function(error, buffer){
    console.log('arquivo lido');
    fs.writeFile('license-modified.txt', buffer, function(err){
        console.log('arquivo modificado');
    });
});