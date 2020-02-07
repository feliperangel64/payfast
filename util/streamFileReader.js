var fs = require('fs');

fs.createReadStream('license.txt')

  .pipe(fs.createWriteStream('license-modified-stream.txt'))

  .on('finish', function(){
    console.log('arquivo escrito.');
  });