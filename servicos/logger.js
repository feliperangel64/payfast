var winston = require('winston');
var fs = require('fs');

if (!fs.existsSync('logs')) {
    fs.mkdirSync('logs');
}

module.exports = winston.createLogger({
    transports: [
        new winston.transports.File({
            level: "info",
            filename: "logs/payfast.log",
            maxsize: 1048576,
            maxFiles: 10,
            colorize: false
        })
    ]
});
