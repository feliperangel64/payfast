var fs = require('fs');

module.exports = function(app){

    app.post('/uploads/imagem', function(req, res){
        console.log('recebendo imagem');
        var filename = req.headers.filename;
        req.pipe(fs.createWriteStream('files/' + filename))
        .on('finish', function(){
            console.log('arquivo recebido');
            res.status(201).send('ok');
        });
    });
}